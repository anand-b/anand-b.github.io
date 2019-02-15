const withCSS = require('@zeit/next-css')
module.exports = {
    ...withCSS(),
    exportPathMap: async function (defaultPathMap) {
        return {
        '/': { page: '/' }
        }
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/' : ''
}