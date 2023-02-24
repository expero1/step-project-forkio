import { js, jsDev } from "./js.js";
import { scssDev } from "./scss.js";
import { html } from "./html.js";
import { appPath as path } from "./app-path.js";
import { plugins } from "./plugins.js";
const { watch } = plugins;
import { image } from "./image.js";
import { fonts } from "./fonts.js";

export function startWatch() {
  watch(`${path.watch.js}`, jsDev);
  watch(`${path.watch.scss}`, scssDev);
  watch(`${path.watch.html}`, html);
  watch(`${path.watch.img}`, image);
  watch(`${path.watch.fonts}`, fonts);
}
