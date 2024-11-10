# dayjs-parser


[![NPM Link](https://img.shields.io/npm/v/dayjs-parser?v=1.0.0-rc.1)](https://npmjs.com/package/dayjs-parser)
[![Build Status](https://github.com/kensnyder/dayjs-parser/actions/workflows/workflow.yml/badge.svg?v=2.0.0-rc.1)](https://github.com/kensnyder/dayjs-parser/actions)
[![Code Coverage](https://codecov.io/gh/kensnyder/dayjs-parser/branch/main/graph/badge.svg?v=2.0.0-rc.1)](https://codecov.io/gh/kensnyder/dayjs-parser)
[![Language: TypeScript](https://badgen.net/static/language/TS?v=1.0.0-rc.1)](https://github.com/search?q=repo:kensnyder/dayjs-parser++language:TypeScript&type=code)
![Tree shakeable](https://badgen.net/static/tree%20shakeable/yes/green?v=1.0.0-rc.1)
[![ISC License](https://badgen.net/github/license/kensnyder/dayjs-parser?v=1.0.0-rc.1)](https://opensource.org/licenses/ISC)

A comprehensive and extensible date parsing plugin for
[dayjs](https://day.js.org). It allows passing a wide variety of date formats to
`dayjs()`. Most locales are supported automatically.

It uses [dayjs-parser](https://npmjs.com/package/dayjs-parser) for parsing
date strings.

## Table of Contents

- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [Breaking changes](#breaking-changes-v0x--v1x)
- [Recognized Formats](http://npmjs.com/packages/dayjs-parser#recognized-formats)
- [Locale Support](#locale-support)
- [Sister Packages](#sister-packages)
- [Unit Testing](#unit-testing)
- [Contributing](#contributing)

## Motivation

1. The APIs I consume have a lot of different date formats
1. I want to create REST APIs that accept all major formats
1. I want to handle user-input dates
1. I want to support dates in other languages according to JavaScript's new
   `Intl` global object

## Installation

```bash
npm install dayjs dayjs-parser
```

## Usage

Register as a regular dayjs plugin

```js
import dayjs from 'dayjs';
import dayjsParser from 'dayjs-parser';

dayjs.extend(parserPlugin);

const date1 = dayjs('Wed Jan 19 2022 17:52:46');
const date2 = dayjs('in 2 weeks');
const date3 = dayjs('2016-03-05T23:59:59.000Z');
```

## Breaking changes v0.x => v1.x

Dropped support for importing from `dayjs-parser/dayjs`. Now you must register
dayjsParser as a plugin. Both cjs and esm now supported.

## Locale Support

Locales are supported by first setting the global locale:

```js
import dayjs from 'dayjs';
import dayjsParser from 'dayjs-parser';

dayjs.extend(parserPlugin);
dayjs.locale('fr');

const date = dayjs('15 septembre 2015');
```

Note that your system must have that locale installed.

See the [Dayjs docs on locales](https://day.js.org/docs/en/i18n/i18n)

## Sister Packages

- Standalone Parser:
  [dayjs-parser](http://npmjs.com/packages/dayjs-parser)
- Luxon: [luxon-parser](http://npmjs.com/package/luxon-parser)
- Moment: [moment-parseplus](http://npmjs.com/package/moment-parseplus)

## Unit Testing

`dayjs-parser` has 100% code coverage.

- To run tests, run `npm test`
- To check coverage, run `npm run coverage`

Unit tests require a global install of `full-icu` and `dayjs`. The test runner
will attempt to install these if absent.

## Contributing

Contributions are welcome. Please open a GitHub ticket for bugs or feature
requests. Please make a pull request for any fixes or new code you'd like to be
incorporated.
