const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          tailwindcss(),
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};
