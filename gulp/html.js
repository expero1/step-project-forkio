import { appPath as path } from "./app-path.js";
import { plugins } from "./plugins.js";
const { src, dest, browserSync, include, replace, showAlertMessage } = plugins;

export function html() {
  return src(`${path.src.html}/*.html`)
    .pipe(showAlertMessage("HTML"))
    .pipe(include())
    .pipe(replace(/@img/g, "./"))
    .pipe(replace("../..", "./"))
    .pipe(replace("..", "./"))
    .pipe(replace("./dist", "./"))
    .pipe(replace("/dist", "."))
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
}
