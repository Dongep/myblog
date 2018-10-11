let resolve_path = require('./path');

module.exports={
    entry: {
        main: resolve_path("../src/main.js"),
    },
    output: {
        // path: '/dist',
        filename: '[name].js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                include: [resolve_path('../src')],
                use: [
                    {
                        loader: "babel-loader",
                      
                    },
                    // {
                    //     loader: "eslint-loader",
                    //     options: {
                    //       },
                    // }
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