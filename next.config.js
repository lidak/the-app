// next.config.js
const withStylus = require('@zeit/next-stylus');
const withCSS = require('@zeit/next-css')
module.exports = withStylus(withCSS());
