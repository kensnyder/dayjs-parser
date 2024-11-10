import { fromString } from 'any-date-parser';
import type { ConfigType, PluginFunc } from 'dayjs';

/**
 * Plugin function meant to be passed to dayjs.extend()
 * @param options  Configuration options (currently none)
 * @param dayjsClass  The Dayjs class
 */
const plugin: PluginFunc<undefined> = (options, dayjsClass) => {
  // @ts-ignore - parse is an undocumented method
  const oldParse = dayjsClass.prototype.parse;
  // @ts-ignore - parse is an undocumented method
  dayjsClass.prototype.parse = function parse(cfg: typeof ConfigType) {
    if (typeof cfg.date === 'string') {
      const parsed = fromString(cfg.date, this.$locale().name);
      if (parsed instanceof Date) {
        cfg.date = parsed;
      }
    }
    // original parse result
    return oldParse.call(this, cfg);
  };
};

export default plugin;
