import { appPath as path } from "./app-path.js";
import { plugins } from "./plugins.js";
const { src, dest, sourcemaps, browserSync, concat, uglify } = plugins;
export function js() {
  return (
    src(path.src.js, { allowEmpty: true })
      .pipe(concat("script.min.js"))
      .pipe(uglify())
      // .pipe(
      //   webpack({
      //     mode: "development",
      //     output: { filename: "script.min.js" },
      //   })
      // )
      .pipe(dest(path.build.js))
      .pipe(browserSync.stream())
  );
}
export function jsDev() {
  return (
    src(path.src.js, { allowEmpty: true })
      .pipe(concat("script.min.js"))
      .pipe(sourcemaps.init())
      // .pipe(uglify())
      // .pipe(
      //   webpack({
      //     mode: "development",
      //     output: { filename: "script.min.js" },
      //   })
      // )
      .pipe(sourcemaps.write())
      .pipe(dest(path.build.js))
      .pipe(browserSync.stream())
  );
}
