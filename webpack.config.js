const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // чтобы стили в готовом проекте собирались в отдельный файл
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // убирает пробелы и переносы из css
const { resolve } = require("path");

module.exports = (env) => ({
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"), // выходной файл складывать в папку dist
    filename: "[name]-[hash].js", // имя выходного файла каждый раз новое с хешом
    clean: true, // {
    //   dry: true, // каждый раз очищаем выходной файл, кроме статических ресурсов
    // },
    environment: {
      arrowFunction: false, // отключаем оборачивание всего кода в стрелочную функцию
    },
  },
  devtool: env.production ? "source-map" : "eval-source-map", // отображать в devtool браузера код в удобочитаемом виде, если запущен режим разработки
  mode: env.production ? "production" : "development", // поверяем в каком режиме запущена сборка и выставляем этот режим
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: [
      "*.html",
      "*.css",
      "*.png",
      "*.jpe?g",
      "*.gif",
      "*.svg",
      "*.webp",
    ], // следить за изменениями в html и css
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext][query]",
        },
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loader: "file-loader",
      //   options: {
      //     name: "static/[hash][ext][query]",
      //   },
      // },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // подключаем плагин для работы webpack с html и css
      template: "index.html", // добавляем index.html в проект webpack
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
    }),
  ],
  externalsType: "script",
  externals: {
    // Можно и так, но тогда в ипорте будет просто промис
    // ymaps3: ["https://api-maps.yandex.ru/3.0-beta/?apikey=4a75efd1-e36a-4f02-8957-954d09371435&lang=ru-RU", "ymaps3"],
    ymaps3: [
      `promise new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = "https://api-maps.yandex.ru/3.0/?apikey=181e7d0a-2afb-430b-89e8-6ccf33dae24d&lang=ru_RU&coordorder=longlat";
        script.async = true;
        script.onload = () => {
          ymaps3.ready.then(() => resolve(ymaps3));
          script.remove();
        };
        document.body.appendChild(script);
      })`,
    ],
  },
});
