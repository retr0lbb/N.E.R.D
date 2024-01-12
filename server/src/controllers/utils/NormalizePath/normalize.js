const path = require("path")

function normalize(string){
    const normalizedPath = path.join(...string.split(/[\\/]/));
    return normalizedPath;
}

module.exports = normalize





