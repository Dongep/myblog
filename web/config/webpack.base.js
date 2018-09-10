const path = require('path')
let present_path = process.cwd();
function abs_path(rel_path){
    return path.resolve(present_path,rel_path)
}

module.exports={
    entry: abs_path('../web/main.js'),
    output: {
        path: abs_path('../dist'),
        filename: 'main.js',
        publicPath: "/static",
        chunkname: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                include: [abs_path('../src')],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015"]
                          },
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                          },
                    }
                ]
                
            }
        ]
    }
}