# Babel plugin immutable const

> Transform _consted_ objects into immutable objects.

The object will be frozen. This will avoid future mutations on it.
Update will simply be ignored and __no errors will be thrown__.

## Installation

```shell
npm install --save-dev babel-plugin-immutable-const
```

## Usage

Add the following line to your .babelrc file:

```json
{
  "plugins": ["immutable-const"]
}
```

## Example

```js
const foo = { bar: true };
```

Will be transformed into:

```js
const foo = Object.freeze({ bar: true });
```
