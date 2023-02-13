import { appPath as path } from "./app-path.js";
import { plugins } from "./plugins.js";
const { src, dest, imagemin, newer, showAlertMessage } = plugins;
export function image() {
  return src(path.src.img)
    .pipe(showAlertMessage("Image"))
    .pipe(newer(path.build.img))
    .pipe(imagemin())
    .pipe(dest(path.build.img));
}
