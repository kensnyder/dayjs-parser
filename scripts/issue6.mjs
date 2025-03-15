import dayjs from 'dayjs';
import dayjsParser from '../dist/index.mjs';

dayjs.extend(dayjsParser);

const date1 = dayjs('Wed Jan 19 2022 17:52:46');
const date2 = dayjs('in 2 weeks');
const date3 = dayjs('2016-03-05T23:59:59.000Z');

console.log(date1.format());
console.log(date2.format());
console.log(date3.format());
