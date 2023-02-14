import { html } from "./gulp/html.js";
import { scss, scssDev } from "./gulp/scss.js";
import { js, jsDev } from "./gulp/js.js";
import { image } from "./gulp/image.js";
import { fonts } from "./gulp/fonts.js";
import { clean } from "./gulp/clean.js";
import { server } from "./gulp/server.js";
import { startWatch } from "./gulp/watcher.js";
import { plugins } from "./gulp/plugins.js";
const { series, parallel, task } = plugins;

const dev = parallel(startWatch, server);
const buildDev = series(clean, html, scssDev, jsDev, fonts, image);
const build = series(clean, html, scss, js, fonts, image);
task("image", image);
task("js", js);
task("scss", scss);
task("html", html);
task("clean", clean);
task("build-dev", buildDev);

task("dev", dev);
task("build", build);

task("default", series(buildDev, dev));
