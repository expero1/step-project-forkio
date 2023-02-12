import { appPath as path } from "./app-path.js";
import { plugins } from "./plugins.js";
const { src, dest, browserSync, include, replace } = plugins;

export function html() {
  return src(`${path.src.html}/*.html`)
    .pipe(include())
    .pipe(replace("../..", "./dist"))
    .pipe(replace("..", "./dist"))
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
}
