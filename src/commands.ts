import { QuickPickItem } from 'vscode';

interface CustomQuickPickItem extends QuickPickItem {
  isCompound?: boolean;
}

export const quickPickItems: CustomQuickPickItem[] = [
  {
    label: 'camelCase',
    description: '"Foo Bar" => "fooBar"',
    detail: 'Converts string to camel case',
  },
  {
    label: 'capitalize',
    description: '"Foo Bar" => "Foo bar"',
    detail: 'Converts the first character of string to upper case and the remaining to lower case',
  },
  {
    label: 'deburr',
    description: '"déjà vu" => "deja vu"',
    detail: 'Changes Latin-1 Supplement and Latin Extended-A letters to basic Latin',
  },
  {
    label: 'escape',
    description: '"<div>foo" => "&lt;div&gt;foo"',
    detail: 'Changes special characters in string to their corresponding HTML entities',
  },
  {
    label: 'kebabCase',
    description: '"Foo Bar" => "foo-bar"',
    detail: 'Converts string to kebab case',
  },
  {
    label: 'lowerCase',
    description: '"Foo Bar" => "foo bar"',
    detail: 'Converts string, as space separated words, to lower case',
  },
  {
    label: 'lowerFirst',
    description: '"Foo Bar" => "foo Bar"',
    detail: 'Converts the first character of string to lower case',
  },
  {
    label: 'snakeCase',
    description: '"Foo Bar" => "foo_bar"',
    detail: 'Converts string to snake case',
  },
  {
    label: 'toLower',
    description: '"FOO BAR" => "foo bar"',
    detail: 'Converts string, as a whole, to lower case',
  },
  {
    label: 'toUpper',
    description: '"fooBar" => "FOOBAR"',
    detail: 'Converts string, as a whole, to upper case',
  },
  {
    label: 'trim',
    description: '"  foo  " => "foo"',
    detail: 'Removes leading and trailing whitespace or specified characters from string',
  },
  {
    label: 'trimEnd',
    description: '"  foo  " => "  foo"',
    detail: 'Removes trailing whitespace or specified characters from string',
  },
  {
    label: 'trimStart',
    description: '"  foo  " => "foo  "',
    detail: 'Removes leading whitespace or specified characters from string',
  },
  {
    label: 'unescape',
    description: '"&lt;div&gt;foo" => "<div>foo"',
    detail: 'Changes HTML entities in string to their corresponding characters',
  },
  {
    label: 'upperCase',
    description: '"FooBar" => "FOO BAR"',
    detail: 'Converts string, as space separated words, to upper case',
  },
  {
    label: 'upperFirst',
    description: '"foo bar" => "Foo bar"',
    detail: 'Converts the first character of string to upper case',
  },
  {
    label: 'snakeCaseUpper',
    description: '"fooBar" => "FOO_BAR"',
    detail: 'Converts string to snake case, upper case',
    isCompound: true,
  },
  {
    label: 'capitalCamelCase',
    description: '"Foo Bar" => "FooBar"',
    detail: 'Converts string to camel case, capital first letter',
    isCompound: true,
  },
];
