# figures-colored

npm [figures](https://www.npmjs.com/package/figures) in common colors.

![figures-colored](https://raw.githubusercontent.com/m59peacemaker/node-figures-colored/master/figures-colored.jpg)

## install

```sh
npm install figures-colored
```

## example

```js
const {tick, cross} = require('figures-colored')

console.log(`It worked ${tick}`) // green checkmark
console.log(`It failed ${cross}`) // red X
```

The long way (manual coloring):

```js
const {tick, cross} = require('figures')
const {green, red} require('chalk')

console.log(`It worked ${green(tick)}`) // green checkmark
console.log(`It failed ${red(cross})`) // red X
```

## more colors

Submit a PR or open an issue with suggestions for other figures that should be colored!
