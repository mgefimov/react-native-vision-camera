/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const pak = require('../package.json')

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        processNestedWorklets: true
      }
    ],
    ['react-native-worklets-core/plugin'],
    [
      'module-resolver',
      {
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
        },
      },
    ],
  ],
}
