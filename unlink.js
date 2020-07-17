const fs = require('fs')

const unlink = (path) => {
    fs.unlink(path, (error) => {
        if (error) return console.log(error)
        console.log(`${path} was succesfully deleted`)
    })
}

unlink('./archivo.txt')