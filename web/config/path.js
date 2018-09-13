const path = require('path')
let present_path = __dirname;
function resolve_path(rel_path){
    console.log(present_path,rel_path)
    return path.resolve(present_path,rel_path)
}
module.exports = resolve_path