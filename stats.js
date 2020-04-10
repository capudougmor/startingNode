const os = require('os')

setInterval(() => {
    const { freemem, totalmem } = os
    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freelmem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)

})