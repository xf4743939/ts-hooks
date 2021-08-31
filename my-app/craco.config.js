const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require('craco-antd')
const path = require('path')
const pathResolve = pathUrl => path.join(__dirname,pathUrl)

module.exports = {
  webpack:{
    alias:{
     "@":pathResolve("src"),
     "@components":pathResolve('scr/components')
    }
  },
  plugins:[
    {
      plugin:CracoLessPlugin,
      options:{
        lessLoaderOptions:{
          lessOptions:{
            javascriptEnabled: true,
          }
        }
      }
    },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
  ],
  babel:{
    plugins:[
      // ['import',{libraryName:'antd', "libraryDirectory": "es",style:true}]
      ["@babel/plugin-proposal-decorators",{legacy:true}]
    ]
  }
}