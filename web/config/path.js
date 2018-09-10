const path = require('path')
let present_path = process.cwd();
function abs_path(rel_path){
    return path.resolve(present_path,rel_path)
}
module.exports = abs_path