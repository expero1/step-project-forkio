import { appPath as path } from "./app-path.js";
import { plugins } from "./plugins.js";
const {
  src,
  dest,
  rename,
  replace,
  autoprefixer,
  sass,
  sourcemaps,
  cleancss,
  browserSync,
  gcmq,
  purgecss,
  showAlertMessage,
} = plugins;
export function scss() {
  return (
    src(`${path.src.scss}`)
      .pipe(showAlertMessage("SCSS"))
      .pipe(sass())
      .pipe(rename("style.min.css"))
      .pipe(replace(/@img/g, "../img"))
      .pipe(
        purgecss({
          content: [`${path.build.html}/*.html`],
          safelist: [/active$/],
        })
      )
      // .pipe(cleancss())
      .pipe(gcmq())
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 4 versions"],
          grid: true,
        }).pipe(
          cleancss({
            level: { 1: { specialComments: 0 } },
          })
        )
      )
      .pipe(dest(`${path.build.css}`))
      .pipe(browserSync.stream())
  );
}
export function scssDev() {
  return (
    src(`${path.src.scss}`)
      .pipe(showAlertMessage("SCSS"))
      .pipe(sass())
      .pipe(rename("style.min.css"))
      // .pipe(purgecss({ content: ["${path.dest.html/*.html}"] }))
      .pipe(sourcemaps.init())
      .pipe(cleancss())
      // .pipe(
      //   autoprefixer({
      //     overrideBrowserslist: ["last 4 versions"],
      //     grid: true,
      //   })
      // )
      .pipe(gcmq())
      .pipe(sourcemaps.write())
      .pipe(dest(`${path.build.css}`))
      .pipe(browserSync.stream())
  );
}
