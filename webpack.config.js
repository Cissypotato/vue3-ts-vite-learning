const {
    Configuration
} = require('webpack')

const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

/**
 * @type {Configuration}
 */

const config = {

    mode: 'development',
    entry:'./src/main.ts',
    output:{
        filename:'[hash].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[new HtmlWebpackPlugin({template:'./public/index.html'})]
}

module.exports=config