import { plugins } from "./plugins.js";
const { src, dest } = plugins;
import { appPath as path } from "./app-path.js";

export function fonts() {
  return src(path.src.fonts).pipe(dest(path.build.fonts));
}
