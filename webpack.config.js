const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: ['./src/index.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
}
