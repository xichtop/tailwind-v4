const chroma = require('chroma-js');
const { fromPairs } = require('es-toolkit/compat');
const { map } = require('./object-map');

/**
 * Generates contrasting counterparts of the given palette.
 * The provided palette must be in the same format with
 * default Tailwind color palettes.
 * @type {import('../theming').Palette}
 * @param palette: Palette
 */
const generateContrasts = (palette) => {
  const lightColor = '#FFFFFF';
  let darkColor = '#FFFFFF';

  // Iterate through the palette to find the darkest color
  Object.keys(palette).forEach((hue) => {
    darkColor =
      chroma.contrast(palette[hue], '#FFFFFF') > chroma.contrast(darkColor, '#FFFFFF')
        ? palette[hue]
        : darkColor;
  });

  // Generate the contrasting colors
  return fromPairs(
    map(palette, (color, hue) => [
      hue,
      chroma.contrast(color, darkColor) > chroma.contrast(color, lightColor)
        ? darkColor
        : lightColor,
    ])
  );
};

module.exports = generateContrasts;
