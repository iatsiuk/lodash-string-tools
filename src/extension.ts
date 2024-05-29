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

import { ExtensionContext, commands, window } from 'vscode';
import { quickPickItems } from './commands';

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

export function activate(context: ExtensionContext) {
  let disposable = commands.registerCommand('lodash-string-tools.commands', async () => {
    const quickPick = await window.showQuickPick(quickPickItems, {
      title: `Select a lodash string method`,
      matchOnDetail: true,
      canPickMany: false,
    });

    const editor = window.activeTextEditor;

    if (quickPick && editor?.selection && !editor.selection.isEmpty) {
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
