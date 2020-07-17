
const fs = require('fs')

function createFile(filename, data) {
    fs.writeFile(filename, data, 'utf8', (error) => {
        if (error) return console.log("No se pudo crear el archivo:", error)

        console.log(`El archivo ${filename} sí se creó`)
    })

}

createFile('anotherFile.txt', 'Soy el contenido del archivo  que acabas de crear.')