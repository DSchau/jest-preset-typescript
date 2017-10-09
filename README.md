# jest-preset-typescript

[![Build Status](https://travis-ci.org/DSchau/jest-preset-typescript.svg?branch=master)](https://travis-ci.org/DSchau/jest-preset-typescript) [![NPM Version](https://img.shields.io/npm/v/jest-preset-typescript.svg)](https://www.npmjs.com/package/jest-preset-typescript)

A preset that can be used to quickly get up and running with jest + typescript.

## Install

```bash
yarn add jest ts-jest typescript jest-preset-typescript --dev
```

or with `npm` if that's more your style 😎

```bash
npm install jest ts-jest typescript jest-preset-typescript --save-dev
```

*(note: if you already have the peer dependencies installed, you only need to install `jest-preset-typescript`!)*

Then, once all dependencies are installed, simply create a `jest.config.js` in the root of your project with the following contents:

```javascript
module.exports = {
  preset: 'jest-preset-typescript'
};
```

## Features

All of the features come courtesy of [ts-jest][ts-jest], so simply add this preset and you can author your tests/mocks/etc. in TypeScript, all the while getting the excellent testing capabilities of jest. 🎉

[ts-jest]: https://github.com/kulshekhar/ts-jest
