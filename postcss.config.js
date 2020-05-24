if (process.env.NODE_ENV === 'development') {
    module.exports = {
        plugins: [
            require('autoprefixer'),
            require('cssnano')
        ]
    }
}