var fs = require("fs");

const readFile = (error, url) => {
    let content = fs.readFile(url, "utf-8", (error, data) => {
        if (error) console.log("error:", error)
        console.log(data)
    })
    return content
}

console.log(readFile(null, "./archivo.txt"))

function createFile(filename, data) {
    fs.writeFile(filename, data, 'utf8', (error) => {
        if (error) return console.log("No se pudo crear el archivo:", error)

        console.log(`El archivo ${filename} sí se creó`)
    })

}
createFile('newFile.txt', 'Soy el contenido del archivo.')