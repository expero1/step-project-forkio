import { appPath as path } from "./app-path.js";
import { plugins } from "./plugins.js";
const { browserSync } = plugins;
export function server() {
  browserSync.init({
    server: { baseDir: path.build.html },
    notify: false,
    port: 3000,
    online: true,
  });
}
