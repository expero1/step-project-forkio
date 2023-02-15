import { plugins } from "./plugins.js";
const { src, dest, showAlertMessage } = plugins;
import { appPath as path } from "./app-path.js";

export function fonts() {
  return src(path.src.fonts)
    .pipe(showAlertMessage("fonts"))
    .pipe(dest(path.build.fonts));
}
