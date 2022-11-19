// настройки пути

//Получаем имя папки пути проэкта
import * as nodePath from 'path'; //импортируем модуль т.к pacaje.json подключили модули

// и с помощью него получаем имя папки проэкта
const rootFolder = nodePath.basename(nodePath.resolve())



const buildFolder = './dist'; //папка для результата , создатся автоматиескиы
const srcFolder = './src'; //папка с исходниками


// создаем объект в котором бдет храниться вся информация о путях
export const path = {

    //файлы из src будут передаваться в папку с результатом

    //объект путей к папке с результатом
    // куда будут переноситься файлы
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`
    },

    // объект путей к иходной папке 
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**.*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
        // настраиаем прроцесс копирования из изходников в результаты
        // ${srcFolder}- папка с исходниками  /files/-именно из папки files переносились файлы
        // **/*.* - все вложенные папки с любым названием и разрешением
    },

    // файлы и папки за которыми должен следить gulp
    // и при любых изменения выполнять определенные дейвия

    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder, // св-во clean будет равно папке с рзультатом
    buildFolder: buildFolder, //папка для результата
    srcFolder: srcFolder, //папка с исходниками
    rootFolder: rootFolder, //папка с наванием прооекта
    ftp: `` // для сохранения файлов на удаленном  фтп сервере
}