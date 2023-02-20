// import { basename, resolve } from "path";
const srcDir = "src";
const buildDir = "dist";
const rootDir = ".";
// const rootDir = basename(resolve());
const imgExt = "jpg,jpeg,png,gif,webp,svg";
export const appPath = {
  src: {
    html: `${srcDir}/html`,
    scss: `${srcDir}/scss/style.scss`,
    js: `${srcDir}/js/**/*.js`,
    img: `${srcDir}/img/**/*.{${imgExt}}`,
    fonts: `${srcDir}/fonts/**/*.*`,
  },
  build: {
    html: `${buildDir}`,
    css: `${buildDir}/css`,
    js: `${buildDir}/js`,
    img: `${buildDir}/img`,
    fonts: `${buildDir}/fonts`,
  },
  watch: {
    html: `${srcDir}/html/**/*.{html,json}`,
    scss: `${srcDir}/scss/**/*.scss`,
    js: `${srcDir}/js/**/*.js`,
    img: `${srcDir}/img/**/*.{${imgExt}}`,
    fonts: `${srcDir}/fonts`,
  },
  clean: {
    html: `${buildDir}/*.html`,
    css: `${buildDir}/css/*.css`,
    js: `${buildDir}/js/*.js`,
    img: `${buildDir}/img/*/`,
    fonts: `${buildDir}/fonts/*/`,
    dist: `${buildDir}/*/`,
  },
};
