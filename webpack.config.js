module.exports = {
    devtool: 'source-map',
    entry: './app-client.js',
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules|app-server.js/,
                loader: 'babel',
                query: {
                    presets:['react']
                }
            }
        ]
    }
}