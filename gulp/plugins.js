import gulp from "gulp";
const { src, dest, series, parallel, watch, task } = gulp;
//import webpack from "webpack-stream";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
/* css */
import gulpSass from "gulp-sass";
import sass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleancss from "gulp-clean-css";
import gcmq from "gulp-group-css-media-queries";
import purgecss from "gulp-purgecss";
/* browser */
import browserSync from "browser-sync";
import { deleteAsync as del } from "del";
import include from "gulp-file-include";
import replace from "gulp-replace";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

const showAlertMessage = (title = "unknown") => {
  return plumber(
    notify.onError({
      title: title,
      message: "Error: <%= error.message %>",
    })
  );
};

export const plugins = {
  src,
  dest,
  series,
  parallel,
  watch,
  task,
  rename,
  sourcemaps,
  /* js */
  //webpack,
  uglify: uglify,
  /* css */
  sass: gulpSass(sass),
  autoprefixer,
  cleancss,
  concat,
  gcmq,
  purgecss,
  /* html */
  include,
  replace,
  /* filesystem */
  del,
  /* images */
  imagemin,
  newer,
  /* browser */
  browserSync,
  // plumber,
  // notify,
  showAlertMessage,
};
