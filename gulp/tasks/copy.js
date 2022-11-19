export const copy = () => {
    return app.gulp.src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.build.files))//метод dest пункт назначения, куда перенести
}

//получили
//и отправили