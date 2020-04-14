const http = require('http') // modulo para servir na net
const fs = require('fs') // modulo para leitura do arquivo
const path = require('path') // modulo para caminho

http.createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)
    const extname = path.extname(filePath)

    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find(item => item == extname)

    if(!allowed) return

    fs.readFile(
        filePath,
        (err, content) => {
            if(err) throw err

            res.end(content)
        }
    )    
}).listen(5000, () => console.log('Sever is run'));