const express = require("express")
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.end('<!DOCTYPE html>\n' +
        '<html lang="ru">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
        '    <link rel="preconnect" href="https://fonts.googleapis.com">\n' +
        '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
        '    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">\n' +
        '    <link rel="stylesheet" href="style/style.css">\n' +
        '    <title>Document</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '    <header class="header">\n' +
        '        <div class="header_textblock">\n' +
        '                <p class="header_textblock_text">Приветствуем на нашем сайте </p>\n' +
        '                <p class="header_textblock_text">Это экспериментальный проект для компании “Интспирит”</p>\n' +
        '                <p class="header_textblock_text">Нажмите на кнопку чтобы пройти авторизацию</p>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="header_button">\n' +
        '                <p class="header_button_text">Вперёд!</p>\n' +
        '        </div>\n' +
        '    </header>\n' +
        '</body>\n' +
        '</html>')
})

app.get('/about', (req, res) => {
    res.end('<h1>About page</h1>')
})

app.listen(PORT, () => {
    console.log('Server has been started...')
})