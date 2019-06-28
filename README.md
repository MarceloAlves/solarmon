# SolarMon

API wrapper for the [SolarEdge Monitoring API](https://www.solaredge.com/sites/default/files/se_monitoring_api.pdf)

---
[![NPM](https://img.shields.io/npm/v/solarmon.svg)](https://www.npmjs.com/package/solarmon)
[![Travis-CI](https://img.shields.io/travis/com/marceloalves/solarmon.svg)](https://travis-ci.org/MarceloAlves/solarmon)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![MIT](https://img.shields.io/npm/l/solarmon.svg?color=blue)](https://github.com/MarceloAlves/solarmon/blob/master/LICENSE.md)



This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Usage

Setup the client

```javascript
import solarmon from 'solarmon'

const client = new solarmon.client('apiKey123')
```

Get a list of sites

```javascript
client.site.list().then(r => console.log(r))
```

Get the site overview

```javascript
client.site.overview('siteId123').then(r => console.log(r))
```
## Contributing

### Local Development

Below is a list of commands you will probably find useful.

#### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

Your library will be rebuilt if you make edits.

#### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

#### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### License

MIT
