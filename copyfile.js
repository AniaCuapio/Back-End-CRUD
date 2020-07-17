const fs = require('fs')

const copyFile = (source, destination) => {
    fs.copyFile(source, destination, (error) => {
        if (error) return console.log("error: ", error)
        console.log(`${source} was copied to ${destination}`)
    });
}
copyFile('./newFile.txt', './anotherFile.txt')