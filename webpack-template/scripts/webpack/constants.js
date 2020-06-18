const { resolve } = require("path");
const { path: ROOT_DIR } = require("app-root-path");

exports.ROOT_DIR = ROOT_DIR;
exports.SRC_DIR = resolve(ROOT_DIR, "src");
exports.MAIN_ENTRY = resolve(ROOT_DIR, "src/index.js");
exports.DIST_DIR = resolve(ROOT_DIR, "dist");
exports.HTML_TEMPLATE = resolve(ROOT_DIR, "src/html/index.html");
exports.IMAGES = resolve(ROOT_DIR, "src/assets/images");
exports.CleanOptions = {
  dry: false,
  verbose: true,
};
exports.HOST = "localhost";
exports.PORT = 5000;
