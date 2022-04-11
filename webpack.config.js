// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const CopyFilePlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const ZipPlugin = require("zip-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const packageJson = require("./package.json");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "cheap-module-source-map", //参考になったページ: https://stackoverflow.com/questions/48047150/chrome-extension-compiled-by-webpack-throws-unsafe-eval-error
  plugins: [
    new CleanWebpackPlugin(),
    new CopyFilePlugin(
      {
        patterns: [
          {
            from: "**/*.png",
            to: "./icons",
            context: "src/icons"
          },
          {
            from: "**/*",
            to: "./popup",
            context: "src/popup"
          },
          {
            from: "*.js",
            to: "./",
            context: "src",
            globOptions: {
              gitignore: false,
              ignore: [
                "**/index.js"
              ]
            }
          },
          {
            from: "**/*.json",
            to: "./",
            context: "src",
          },
          {
            from: "**/*",
            to: "./fonts",
            context: "src/fonts"
          },
          {
            from: "**/all.min.css",
            to: "./css",
            context: "src/styles"
          }
        ]
      }
    ),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new ZipPlugin({
      filename: `scombetter_${packageJson.version}`
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
