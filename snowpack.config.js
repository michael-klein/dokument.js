// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // mount: {},
  // plugins: [],
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
  exclude: ["**/docs/**/*"],
  plugins: [
    [
      "snowpack-plugin-rollup-bundle",
      {
        entrypoints: "build/lib/index.js",
        extendConfig: config => {
          config.outputOptions.entryFileNames = "[name].js";
          config.outputOptions.chunkFileNames = "[name].js";

          return config;
        }
      }
    ]
  ]
};
