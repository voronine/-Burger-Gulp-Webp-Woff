//Основной модуль
import gulp from "gulp";
//Импорт путей
import { path } from "./gulp/config/path.js"
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js"

// Передаем значения ключей в глобальную переенную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";

// Наблюдатель за изменениями в папке, автоматизация
function watcher() {
    gulp.watch(path.watch.files, copy);// (путь и метод)
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { svgSprive }

//Обработка шрирфтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.parallel(fonts, gulp.parallel(copy, html, scss, js, images));

//Построение сценарирев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)); //удаляем все reset, копируем,следим)
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
// Выполнение сценария по умолчанию
gulp.task('default', dev);

