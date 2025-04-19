const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        extract: true, // or false if you want to inline
        modules: false,
        use: ['sass'],
      })
    );
    return config;
  },
};