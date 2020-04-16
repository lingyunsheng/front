module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        https: false, // https:{type:Boolean}
        hotOnly: false,
        open: true, // 配置自动启动浏览器
        // proxy: 'http://localhost:3000' 配置跨域处理只有一个代理
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // 访问的接口域名
                changeOrigin: true, //开启代理，在本地会创建一个虚拟服务端 发送请求数据
                // 并且同时接收请求到数据 不会产生跨域的问题
                pathRewrite: {
                    '^/api': '' // 用'/api'代替target里面的地址
                }
            }
        }
    }
}