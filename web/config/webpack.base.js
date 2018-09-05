let present_path = process.cwd();
function abs_path(rel_path){
    return path.resolve(present_path,rel_path)
}

module.exports={
    entry: abs_path('../web/index.js')
}