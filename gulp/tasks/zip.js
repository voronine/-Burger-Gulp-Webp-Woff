import del from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
    del(`./${app.path.rooFoldren}.zip`)
    return app.gulp.src(`${app.path.buildFolren}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "ZIP",
                message: "Error: <%= error.message%>"
            }))
        )
        .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest('./'));
}