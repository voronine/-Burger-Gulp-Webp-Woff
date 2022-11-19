import { parallel } from "gulp"

//настрройки для выгрузки результата на fttp сервер
export let configFTP = {
    host: "",
    user: "",
    password: "",
    parallel: 5
}