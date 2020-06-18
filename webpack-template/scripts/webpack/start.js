// core
const webpack = require("webpack");
const DevServer = require("webpack-dev-server");
const hot = require("webpack-hot-middleware");
// const chalk = require("chalk");

// config
const config = require("./webpack.config")();

// compiler
const compiler = webpack(config);

//const
const { PORT, HOST } = require("./constants");

const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  overlay: true,
  quiet: true,
  clientLogLevel: "none",
  noInfo: true,
  after: (app) => {
    app.use(
      hot(compiler, {
        log: false,
      })
    );
  },
});
server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
