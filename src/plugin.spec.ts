import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import 'dayjs/locale/sv';
import 'dayjs/locale/ru';
import 'dayjs/locale/de';
import objectSupport from 'dayjs/plugin/objectSupport';
import parserPlugin from './plugin';
import { it, describe, expect } from 'vitest';

dayjs.extend(objectSupport);
dayjs.extend(parserPlugin);

describe('invalid date', () => {
  it('should be invalid "that\'s unpossible"', () => {
    const actual = dayjs('that\'s unpossible');
    expect(actual.isValid()).toEqual(false);
  });
});

describe('twitter time parser', () => {
  it('should handle "Fri Apr 09 12:53:54 +0000 2010"', () => {
    const actual = dayjs('Fri Apr 09 12:53:54 +0000 2010');
    const expected = dayjs({
      month: 3,
      day: 9,
      hour: 12,
      minute: 53,
      second: 54,
      year: 2010,
    });
    expect(actual.format()).toEqual(expected.format());
  });
});

describe('y-m-d parser', () => {
  it('should handle "2021-04-16"', () => {
    const actual = dayjs('2021-04-16');
    const expected = dayjs({
      year: 2021,
      month: 3,
      day: 16,
      hour: 0,
      minute: 0,
      second: 0,
    });
    expect(actual.format()).toEqual(expected.format());
  });
});

describe('toJSON format', () => {
  it('should handle "2016-03-05T23:59:59.000Z"', () => {
    const actual = dayjs('2016-03-05T23:59:59.000Z');
    const expected = dayjs({
      year: 2016,
      month: 2,
      day: 5,
      hour: 23,
      minute: 59,
      second: 59,
    });
    expect(actual.format()).toEqual(expected.format());
  });
});

describe('i18n parsing', () => {
  it('should handle French', () => {
    dayjs.locale('fr');
    const actual = dayjs('24 août 2020');
    const expected = dayjs({
      year: 2020,
      month: 7,
      day: 24,
      hour: 0,
      minute: 0,
      second: 0,
    });
    expect(actual.format()).toEqual(expected.format());
  });
  it('should handle Swedish', () => {
    dayjs.locale('sv');
    const actual = dayjs('24 augusti 2020');
    const expected = dayjs({
      year: 2020,
      month: 7,
      day: 24,
      hour: 0,
      minute: 0,
      second: 0,
    });
    expect(actual.format()).toEqual(expected.format());
  });
  it('should handle Russian', () => {
    dayjs.locale('ru');
    const actual = dayjs('28 февраля 2021');
    const expected = dayjs({
      year: 2021,
      month: 1,
      day: 28,
      hour: 0,
      minute: 0,
      second: 0,
    });
    expect(actual.format()).toEqual(expected.format());
  });
  it('should handle German', () => {
    dayjs.locale('de');
    const actual = dayjs('Dienstag, 22. Januar 2021');
    const expected = dayjs({
      year: 2021,
      month: 0,
      day: 22,
      hour: 0,
      minute: 0,
      second: 0,
    });
    expect(actual.format()).toEqual(expected.format());
  });
});
