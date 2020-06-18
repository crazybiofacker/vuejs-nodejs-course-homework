// webpack plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// constants
const {
  MAIN_ENTRY,
  DIST_DIR,
  HTML_TEMPLATE,
  CleanOptions,
  IMAGES,
} = require("./constants");

module.exports = () => {
  // some stuff
  return {
    mode: "none",
    devtool: false,
    entry: {
      main: MAIN_ENTRY,
    },
    output: {
      filename: "[name].[hash].js",
      path: DIST_DIR,
    },
    plugins: [
      new CleanWebpackPlugin(CleanOptions),
      new HTMLWebpackPlugin({
        template: HTML_TEMPLATE,
        title: "Webpack Config!!!!!⭐️",
        favicon: IMAGES + "/favicon.ico",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
  };
};
