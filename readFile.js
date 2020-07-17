
const fs = require('fs')

const readFile = (url) => {
    fs.readFile(url, "utf-8", (error, data) => {
        if (error) return console.log("error:", error)
        console.log(data)
    })
}
readFile('./anotherFile.txt')