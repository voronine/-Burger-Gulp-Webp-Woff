import del from "del";

export const reset = () => {
    return del(app.path.clean);
}

// очистка перед каждым вопылнением задач
// удаляет папку с результатом