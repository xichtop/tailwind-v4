const { omitBy } = require('es-toolkit');
const { fromPairs } = require('es-toolkit/compat');
const { map } = require('./object-map');

/**
 * Normalizes the provided theme by omitting empty values and values that
 * start with "on" from each palette. Also sets the correct DEFAULT value
 * of each palette.
 * @type {import('../theming').Theme}
 * @param theme: Theme
 */
const normalizeTheme = (theme) => {
  return fromPairs(
    map(
      omitBy(
        theme,
        (palette, paletteName) => `${paletteName}`.startsWith('on') || !Object.keys(palette).length
      ),
      (palette, paletteName) => [
        paletteName,
        {
          ...palette,
          DEFAULT: palette['DEFAULT'] || palette[500],
        },
      ]
    )
  );
};

module.exports = normalizeTheme;
