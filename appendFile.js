const fs = require('fs')

const appendFile = (path, data) => {
    fs.appendFile(path, data, (error) => {
        if (error) console.log(error);
        console.log(`The data was appended to ${path}`)
    })
}
appendFile('./archivo.txt', 'esta línea es nueva y se creó con la función appendFile')