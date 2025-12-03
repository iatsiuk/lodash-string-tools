import { ExtensionContext } from 'vscode';

export interface UsageData {
  [language: string]: {
    [command: string]: number;
  };
}

const USAGE_KEY = 'lodash-string-tools:UsageData';

export function loadUsageData(context: ExtensionContext): UsageData {
  return context.globalState.get<UsageData>(USAGE_KEY, {});
}

export function saveUsageData(context: ExtensionContext, data: UsageData): Thenable<void> {
  return context.globalState.update(USAGE_KEY, data);
}

export async function incrementUsage(
  context: ExtensionContext,
  language: string,
  command: string,
): Promise<void> {
  const data = loadUsageData(context);

  if (!data[language]) {
    data[language] = {};
  }

  data[language][command] = (data[language][command] || 0) + 1;

  await saveUsageData(context, data);
}

export function getLanguageUsage(
  usageData: UsageData,
  language: string,
): { [command: string]: number } {
  return usageData[language] || {};
}
