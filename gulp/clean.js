import { appPath as path } from "./app-path.js";
import { plugins } from "./plugins.js";
const { del } = plugins;
export function clean() {
  return del([path.clean.html, path.clean.dist]);
}
