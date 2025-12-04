# Lodash string methods for Visual Studio Code

<p align="center">
  <img src="https://raw.githubusercontent.com/iatsiuk/lodash-string-tools/master/static/banner.png">
</p>

[Lodash](https://lodash.com/) is a JavaScript library that provides utility functions for common programming tasks, utilizing the functional programming paradigm. This extension integrates the powerful string manipulation methods of Lodash into Visual Studio Code. With a simple hotkey, you can effortlessly convert text into various formats such as camelCase, kebab-case, snake_case, and more.

<p align="center">
  <em>
    camelCase
    capitalize
    deburr
    escape
  </em>
  <br />
  <em>
    kebabCase
    lowerCase
    lowerFirst
    snakeCase
  </em>
  <br />
  <em>
    toLower
    toUpper
    trim
    trimEnd
  </em>
  <br />
  <em>
    trimStart
    unescape
    upperCase
    upperFirst
  </em>
  <br />
  <em>
    <a href="https://lodash.com/docs/">
      Need documentation on what these functions do?
    </a>
  </em>
</p>

## Installation

Install through VS Code extensions, just search for `Lodash String Tools`.

[Visual Studio Code Market Place: Lodash String Tools](https://marketplace.visualstudio.com/items?itemName=aleksei-iatsiuk.lodash-string-tools)

Can also be installed in VS Code: Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.

```
ext install aleksei-iatsiuk.lodash-string-tools
```

## Usage

Using Command Palette (CMD/CTRL + Shift + P):

1. Select the text you want to change
2. CMD/CTRL + Shift + P -> Lodash String Tools

<p align="center">
  <img src="https://raw.githubusercontent.com/iatsiuk/lodash-string-tools/master/static/how-to.gif">
</p>

## Keybindings

You don't need to use the Command Palette all the time. Just create your own keybindings. Navigate to `Settings -> Keyboard Shortcuts` and add a keybinding for the `lodash-string-tools.commands`. Simply type `Lodash String Tools` into the search bar to find the command.

Example of keybindings.json file:

```json
{
  "key": "shift+cmd+l",
  "command": "lodash-string-tools.commands"
}
```

Now you can select the text in the editor and press `Shift + Cmd + L` to activate the extension commands menu.

## Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `lodashStringTools.enableSortByUsage` | `false` | Sort commands by usage frequency |

## Additional methods

In addition to the Lodash string methods, this extension also provides a few non-standard string methods:

- snakeCaseUpper - like snakeCase, but with uppercase letters, e.g. "fooBar" -> "FOO_BAR"
- capitalCamelCase - like camelCase, but with the first letter capitalized, e.g. "foo bar" -> "FooBar"
