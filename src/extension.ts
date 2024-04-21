import lodash from 'lodash';
import { ExtensionContext, commands, window } from 'vscode';
import { quickPickItems } from './commands';

interface LodashLib {
  [fn: string]: (text: string) => string;
}

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
      const method = (lodash as unknown as LodashLib)[quickPick.label];

      if (typeof method === 'function') {
        const result = method(text);

        editor.edit((editBuilder) => editBuilder.replace(editor.selection, result));
      }
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
