const dayjs = require('dayjs');
const parserPlugin = require('../index.js');
dayjs.extend(parserPlugin);

module.exports = dayjs;
