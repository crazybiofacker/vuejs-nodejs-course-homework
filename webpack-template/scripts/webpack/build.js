// core
const webpack = require("webpack");
const chalk = require("chalk");

// config
const config = require("./webpack.config")();

// compiler
const compiler = webpack(config);

// hooks
compiler.hooks.beforeRun.tap({ name: "hook" }, (compiler) => {
  compiler.hooks.shouldEmit.tap({ name: "hook" }, (compilation) => {
    console.log(compilation);
  });
});

compiler.run((error, stats) => {
  if (error) {
    console.error(error.stack || error);
    if (error.details) {
      console.error(error.details);
    }
    return null;
  }

  const info = stats.toString({
    hash: true,
    modules: false,
    colors: true,
    entrypoints: false,
    env: true,
  });

  console.log(chalk.greenBright("Build Completed!"));
  console.log(info);

  if (stats.hasErrors()) {
    console.log(chalk.redBright("Error!"));
    console.log(info);
  }
  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright("Warning!"));
    console.log(info);
  }
});
