const fs = require('fs')

const PATH = './src/types/index.ts'

const formatFile = fileName => (err, data) => {
    if (err) {
        console.error(err)
    }

    const content =
        '/** \n' +
        ' * This file was auto-generated by the command `yarn graphql:codegen` \n' +
        ' * Please do not edit this file directly. \n' +
        ' */\n\n'.concat(data.toString())

    fs.writeFile(fileName, content, 'utf-8', function (err) {
        if (err) {
            console.log(err)
        }

        console.log('> formatation finished')
    })
}

const renameFiles = async () => {
    console.log('> formatting file ' + PATH)

    if (fs.existsSync(PATH)) {
        fs.readFile(PATH, formatFile(PATH))
    }
}

setTimeout(renameFiles, 500)
