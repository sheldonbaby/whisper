// const path = require('path')
// const proEnv = require('./config/pro.env')
// const devEnv = require('./config/dev.env')
// const env = process.env.NODE_ENV

// let target = ''
// if(env === 'production') {
//     target = proEnv.hosturl
// }else {
//     target = devEnv.hosturl
// }

module.exports = {
    devServer: {
        proxy: {
            '/v/*': {
                target: 'http://localhost:3003/',
                changeOrigin: true
            }
        }
    }
}
