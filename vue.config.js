const path = require('path')
const themePath = path.resolve(__dirname, './src/style/theme.less')

module.exports = {
  // 打包时不产生map文件
  productionSourceMap: false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  //配置代理跨域
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://gmall-h5-api.atguigu.cn",
  //     },
  //   },
  // },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量
          'text-color': '#111',
          'border-color': '#eee',
          // 'red': '#007acc',

          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${themePath}";`,
        },

      },
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");   
       svgRule.uses.clear();
       svgRule
       .use("svg-sprite-loader")
       .loader("svg-sprite-loader")
      .options({
          symbolId: "icon-[name]"
        });
    },





};



