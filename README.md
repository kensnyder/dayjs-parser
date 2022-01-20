# dayjs-parser

[![NPM Link](https://img.shields.io/npm/v/dayjs-parser?v=0.9.2)](https://npmjs.com/package/dayjs-parser)
[![Build Status](https://ci.appveyor.com/api/projects/status/github/kensnyder/dayjs-parser?branch=master&svg=true&v=0.9.2)](https://ci.appveyor.com/project/kensnyder/dayjs-parser/branch/master)
[![Code Coverage](https://codecov.io/gh/kensnyder/dayjs-parser/branch/master/graph/badge.svg?v=0.9.2)](https://codecov.io/gh/kensnyder/dayjs-parser)
[![ISC License](https://img.shields.io/npm/l/dayjs-parser.svg?v=0.9.2)](https://opensource.org/licenses/ISC)

A comprehensive and extensible date parsing plugin for
[dayjs](https://day.js.org). It allows passing a wide variety of date formats to
`dayjs()`. Most locales are supported automatically.

It uses [any-date-parser](https://npmjs.com/package/any-date-parser) for parsing
date strings.

## Table of Contents

- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [Recognized Formats](#recognized-formats)
- [Adding Custom Formats](#adding-custom-formats)
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

OPTION 1: Use a single import

```js
const dayjs = require('dayjs-parser/dayjs');

const date1 = dayjs('March 5th, 2016 at 7:05pm');
const date2 = dayjs('9 days ago');
const date3 = dayjs('2016-03-05 23:59:59 CST');
```

OPTION 2: Register as a regular dayjs plugin

```js
const dayjs = require('dayjs');
const parserPlugin = require('dayjs-parser');

dayjs.extend(parserPlugin);

const date1 = dayjs('Wed Jan 19 2022 17:52:46');
const date2 = dayjs('in 2 weeks');
const date3 = dayjs('2016-03-05T23:59:59.000Z');
```

## Recognized Formats

- 24 hour time
- 12 hour time
- timezone offsets
- timezone abbreviations
- year month day
- year monthname day
- month day year
- monthname day year
- day month year
- day monthname year
- +/-/ago periods
- now/today/yesterday/tomorrow
- Twitter

`dayjs-parser` relies on
[any-date-format](https://www.npmjs.com/package/any-date-parser) which supports
even more formats. See the
[exhaustive list](https://www.npmjs.com/package/any-date-parser#exhaustive-list-of-date-formats).

## Adding Custom Formats

See
[any-date-format's instructions](https://www.npmjs.com/package/any-date-parser#adding-custom-formats).

Example:

```js
const parser = require('dayjs-parser');

parser.addFormat(
	new parser.Format({
		matcher: /^Q([1-4]) (\d{4})$/,
		handler: function ([, quarter, year]) {
			const monthByQuarter = { 1: 1, 2: 4, 3: 7, 4: 10 };
			const month = monthByQuarter[quarter];
			return { year, month };
		},
	})
);
```

## Locale Support

Locales are supported by first setting the global locale:

```js
const parserPlugin = require('dayjs-parser');
dayjs.extend(parserPlugin);
dayjs.locale('fr');

const date = dayjs('15 septembre 2015');
```

See the [Dayjs docs on locales](https://day.js.org/docs/en/i18n/i18n)

## Sister Packages

- Standalone Parser:
  [any-date-format](http://npmjs.com/packages/any-date-format)
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
