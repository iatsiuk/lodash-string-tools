// this will allow esbuild to bundle only the necessary lodash methods
import camelCase from 'lodash/camelCase';
import capitalize from 'lodash/capitalize';
import deburr from 'lodash/deburr';
import escape from 'lodash/escape';
import kebabCase from 'lodash/kebabCase';
import lowerCase from 'lodash/lowerCase';
import lowerFirst from 'lodash/lowerFirst';
import snakeCase from 'lodash/snakeCase';
import toLower from 'lodash/toLower';
import toUpper from 'lodash/toUpper';
import trim from 'lodash/trim';
import trimEnd from 'lodash/trimEnd';
import trimStart from 'lodash/trimStart';
import unescape from 'lodash/unescape';
import upperCase from 'lodash/upperCase';
import upperFirst from 'lodash/upperFirst';

import { ExtensionContext, commands, window, workspace, TextEditor } from 'vscode';
import { quickPickItems } from './commands';
import { loadUsageData, incrementUsage, getLanguageUsage } from './usage';

const lodashLib = {
  camelCase,
  capitalize,
  deburr,
  escape,
  kebabCase,
  lowerCase,
  lowerFirst,
  snakeCase,
  toLower,
  toUpper,
  trim,
  trimEnd,
  trimStart,
  unescape,
  upperCase,
  upperFirst,
  // compound methods
  snakeCaseUpper: (str: string) => toUpper(snakeCase(str)),
  capitalCamelCase: (str: string) => upperFirst(camelCase(str)),
};

function getEditorLanguage(editor: TextEditor | undefined): string {
  return editor?.document.languageId || 'unknown';
}

export function activate(context: ExtensionContext) {
  let disposable = commands.registerCommand('lodash-string-tools.commands', async () => {
    const config = workspace.getConfiguration('lodashStringTools');
    const enableSortByUsage = config.get<boolean>('enableSortByUsage', false);

    const editor = window.activeTextEditor;
    const language = getEditorLanguage(editor);

    if (enableSortByUsage) {
      const usageData = loadUsageData(context);
      const languageUsage = getLanguageUsage(usageData, language);

      quickPickItems.sort((a, b) => {
        const usageA = languageUsage[a.label] || 0;
        const usageB = languageUsage[b.label] || 0;
        if (usageA !== usageB) {
          return usageB - usageA; // Sort by usage count
        }
        // If usage count is the same, sort alphabetically
        return a.label.localeCompare(b.label);
      });
    }

    const quickPick = await window.showQuickPick(quickPickItems, {
      title: `Select a lodash string method`,
      matchOnDetail: true,
      canPickMany: false,
    });

    if (quickPick && editor?.selection && !editor.selection.isEmpty) {
      if (enableSortByUsage) {
        await incrementUsage(context, language, quickPick.label);
      }

      const text = editor.document.getText(editor.selection);
      const method = lodashLib[quickPick.label as keyof typeof lodashLib];

      if (typeof method === 'function') {
        const result = method(text);

        editor.edit((editBuilder) => editBuilder.replace(editor.selection, result));
      }
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
