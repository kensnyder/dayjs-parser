const parser = require('any-date-parser');

/**
 * Plugin function meant to be passed to dayjs.extend()
 * @param {Object} option  Configuration options (currently none)
 * @param {Dayjs} dayjsClass  The Dayjs class
 */
function plugin(option, dayjsClass) {
	const oldParse = dayjsClass.prototype.parse;
	dayjsClass.prototype.parse = function parse(cfg) {
		if (typeof cfg.date === 'string') {
			const parsed = Date.fromString(cfg.date, this.$locale().name);
			if (parsed instanceof Date) {
				cfg.date = parsed;
			}
		}
		// original parse result
		return oldParse.call(this, cfg);
	};
}

plugin.parser = parser;

module.exports = plugin;
