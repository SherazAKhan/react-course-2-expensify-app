const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env === "Production";

  console.log("env", env);
  return {
    entry: "/src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },

    //We are doing this to load and run js files through babel in webpack
    module: {
      //It means those files will be executed/run which
      //have .js extention, babel-loader will load the files
      //Summary: We are simply telling webpack that everytime
      //an app is loaded only run JS files with babel-loader
      rules: [
        {
          test: /\.js$|jsx/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
    //Source Map in Webpack
    //eval-cheap-module-source-map - Similar to eval-cheap-source-map, however, in this case Source Maps from Loaders are processed for better results.
    //However Loader Source Maps are simplified to a single mapping per line.
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      static: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};
