const EventEmitter = require('events') // ouve eventos
const fs = require('fs')  // trabalha com arquivos do sistema
const path = require('path') // pega o caminho correto do arquivo

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'text.txt'), message, err => {
        if (err) throw err
    })
})

function log(message){
    emitter.emit('log', message)
}

module.exports = log