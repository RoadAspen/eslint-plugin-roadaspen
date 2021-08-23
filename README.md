# eslint-plugin-roadaspen

A collection of ESLint Plugins

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-roadaspen`:

```sh
npm install eslint-plugin-roadaspen --save-dev
```

## Usage

Add `roadaspen` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "roadaspen"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "roadaspen/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


