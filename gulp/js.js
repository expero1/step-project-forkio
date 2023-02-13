import { appPath as path } from "./app-path.js";
import { plugins } from "./plugins.js";
const { src, dest, sourcemaps, browserSync, concat, uglify, showAlertMessage } =
  plugins;
export function js() {
  return (
    src(path.src.js, { allowEmpty: true })
      .pipe(showAlertMessage("JS"))
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
      .pipe(showAlertMessage("JS"))
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
