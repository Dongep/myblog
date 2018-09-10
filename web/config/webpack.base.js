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
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                          },
                    }
                ]
                
            },{
                test: /\.scss/,
                use: [{
                    loader: "style-loader" 
                }, {
                    loader: "css-loader" 
                }, {
                    loader: "sass-loader" 
                }]
            },{
                test: /\.css/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[{
                    loader: 'url-loader',
                    options:{
                        limit: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin("styles.css"),
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // both options are optional
        //     filename: "styles.css"
        //   })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {

        }
      },
      devtool: 'source-map',
}