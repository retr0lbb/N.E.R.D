const fs = require("fs")

function unlinkSyncFs(archive){
    return(fs.unlinkSync(archive))
}

module.exports = unlinkSyncFs