import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/pictures/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.sass`,
        images: `${srcFolder}/pictures/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/pictures/**/*.svg`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.sass`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/pictures/**/*{jpg,jpeg,png,gif,webp}`,
        files: `${srcFolder}/files/**.*`,
    },
    clear: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}