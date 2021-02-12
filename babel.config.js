module.exports = {
    presets: [
      [
        "@babel/preset-env", {
          "modules": 'auto',
          "useBuiltIns": 'entry',
          "corejs": "3",
          'targets': {
            'browsers': ['chrome 86'] // 不同的target,会引入不同的api
          //  'browsers': ['ie >= 8', 'iOS 7'] // 支持ie8，直接使用iOS浏览器版本7
          }
        }
      ]
    ],
    plugins: [
      //以下三个plugins,是ES标准，所以只需要在presets中指定"@babel/preset-env" 即可
      // "@babel/plugin-transform-arrow-functions",
      // "@babel/plugin-transform-exponentiation-operator",
      // "@babel/plugin-transform-classes"

      "@babel/plugin-proposal-class-properties", //ES建议标准引入，本例是使用ClassProperties的方法
      
      [
        //1. 生成一些内部函数(@babel/helper)的引用，避免直接进入目标文件中
       // 2. 在选配corejs时，会利用corejs生成api的引用，如var _promise,从而避免使用污染全局的promise
        "@babel/plugin-transform-runtime",
        //  以下选配，否则会直接生成污染全局的引用
        {
          "corejs": 3
        }
      ]
      
      
    ]
  }