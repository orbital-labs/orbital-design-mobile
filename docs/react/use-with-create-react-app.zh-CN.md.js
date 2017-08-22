webpackJsonp([47,157],{648:function(e,n){e.exports={content:["article",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," (Web \u9879\u76ee) / ",["a",{title:null,href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"],"(React Native \u9879\u76ee) \u662f\u4e1a\u754c\u6700\u4f18\u79c0\u7684 React \u76f8\u5173\u5e94\u7528\u5f00\u53d1\u5de5\u5177\u4e4b\u4e00\uff0c\u672c\u6587\u6863\u5c1d\u8bd5\u4ee5\u6b64\u5de5\u5177\u6765\u4f7f\u7528 antd-mobile \u7ec4\u4ef6\uff1b"],["h2","\u5b89\u88c5\u548c\u521d\u59cb\u5316"],["p","\u9996\u5148\u6211\u4eec\u9700\u8981\u5728\u547d\u4ee4\u884c\u4e2d\u5b89\u88c5\u76f8\u5e94\u5de5\u5177\uff0c\u4f60\u53ef\u80fd\u8fd8\u9700\u8981\u5b89\u88c5 ",["a",{title:null,href:"https://github.com/yarnpkg/yarn/"},"yarn"],"\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> -g yarn\n$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app  <span class="token comment" spellcheck="true"># web \u9879\u76ee</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-native-app  <span class="token comment" spellcheck="true"># react-native \u9879\u76ee</span>'},["code","$ npm install -g yarn\n$ npm install -g create-react-app  # web \u9879\u76ee\n$ npm install -g create-react-native-app  # react-native \u9879\u76ee"]],["p","\u7136\u540e\u65b0\u5efa\u4e00\u4e2a\u9879\u76ee\u3002"],["pre",{lang:"bash",highlighted:'$ create-react-app antm-demo  <span class="token comment" spellcheck="true"># web \u9879\u76ee</span>\n$ create-react-native-app antm-demo  <span class="token comment" spellcheck="true"># react-native \u9879\u76ee</span>'},["code","$ create-react-app antm-demo  # web \u9879\u76ee\n$ create-react-native-app antm-demo  # react-native \u9879\u76ee"]],["p","\u5de5\u5177\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u4e00\u4e2a\u811a\u624b\u67b6\u5e76\u5b89\u88c5 React \u9879\u76ee\u7684\u5404\u79cd\u5fc5\u8981\u4f9d\u8d56\uff0c\u5982\u679c\u5728\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u7f51\u7edc\u95ee\u9898\uff0c\u8bf7\u5c1d\u8bd5\u914d\u7f6e\u4ee3\u7406\u6216\u4f7f\u7528\u5176\u4ed6 npm registry\u3002"],["p","\u7136\u540e\u6211\u4eec\u8fdb\u5165\u9879\u76ee\u5e76\u542f\u52a8\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> antm-demo\n$ yarn start'},["code","$ cd antm-demo\n$ yarn start"]],["ul",["li",["p",["code","Web \u9879\u76ee"],"\uff1a\u6b64\u65f6\u6d4f\u89c8\u5668\u8bbf\u95ee ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"]," \uff0c\u770b\u5230 ",["code","Welcome to React"]," \u7684\u754c\u9762\u5c31\u7b97\u6210\u529f\u4e86\u3002"]],["li",["p",["code","React Native \u9879\u76ee"],"\uff1a\u8fd0\u884c ",["code","npm run ios"]," \u80fd\u5728\u6a21\u62df\u5668\u4e2d\u6253\u5f00\u9875\u9762\u5c31\u7b97\u6210\u529f\u4e86\u3002"]]],["h2","\u5f15\u5165 antd-mobile"],["p","  \u9996\u5148\u4ece yarn \u6216 npm \u5b89\u88c5\u5e76\u5f15\u5165 antd-mobile \u548c ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]],["pre",{lang:null,highlighted:'```bash\n$ yarn add antd<span class="token operator">-</span>mobile\n$ yarn add babel<span class="token operator">-</span>plugin<span class="token operator">-</span>import <span class="token operator">-</span><span class="token operator">-</span>dev\n```'},["code","```bash\n$ yarn add antd-mobile\n$ yarn add babel-plugin-import --dev\n```"]],["h3","Web \u9879\u76ee"],["blockquote",["p","web \u9879\u76ee\u6e90\u7801\u8bf7\u770b ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app"},"antd-mobile-sample/create-react-app"]]],["ol",["li",["p","\u751f\u6210\u81ea\u5b9a\u4e49\u914d\u7f6e"],["pre",{lang:"bash",highlighted:'yarn run <span class="token function">eject</span>'},["code","yarn run eject"]]],["li",["p","\u5b89\u88c5\u5f00\u53d1\u4f9d\u8d56"],["pre",{lang:"bash",highlighted:'yarn add --dev babel-plugin-import svg-sprite-loader@0.3.1 <span class="token function">less</span> less-loader postcss-pxtorem@^3.3.1'},["code","yarn add --dev babel-plugin-import svg-sprite-loader@0.3.1 less less-loader postcss-pxtorem@^3.3.1"]]],["li",["p","\u4fee\u6539 ",["code","config/webpack.config.dev.js"]]]],["pre",{lang:"diff",highlighted:'<span class="token coord">--- a/config/webpack.config.dev.js</span>\n<span class="token coord">+++ b/config/webpack.config.dev.js</span>\n<span class="token coord">@@ -1,6 +1,7 @@</span>\n \'use strict\';\n\n const autoprefixer = require(\'autoprefixer\');\n<span class="token inserted">+const pxtorem = require(\'postcss-pxtorem\');</span>\n const path = require(\'path\');\n const webpack = require(\'webpack\');\n const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n@@ -88,7 +89,7 @@ module.exports = {\n     // for React Native Web.\n     extensions: [\'.web.js\', \'.js\', \'.json\', \'.web.jsx\', \'.jsx\'],\n     alias: {\n<span class="token deleted">-</span>\n<span class="token inserted">+</span>\n       // Support React Native Web\n       // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/\n       \'react-native\': \'react-native-web\',\n@@ -118,7 +119,7 @@ module.exports = {\n           {\n             options: {\n               formatter: eslintFormatter,\n<span class="token deleted">-</span>\n<span class="token inserted">+</span>\n             },\n             loader: require.resolve(\'eslint-loader\'),\n           },\n@@ -144,6 +145,8 @@ module.exports = {\n           /\\.gif$/,\n           /\\.jpe?g$/,\n           /\\.png$/,\n<span class="token inserted">+          /\\.less$/,</span>\n<span class="token inserted">+          /\\.svg$/,</span>\n         ],\n         loader: require.resolve(\'file-loader\'),\n         options: {\n@@ -167,13 +170,48 @@ module.exports = {\n         include: paths.appSrc,\n         loader: require.resolve(\'babel-loader\'),\n         options: {\n<span class="token deleted">-</span>\n<span class="token inserted">+          plugins: [</span>\n<span class="token inserted">+            [\'import\', { libraryName: \'antd-mobile\', style: true }],</span>\n<span class="token inserted">+          ],</span>\n           // This is a feature of `babel-loader` for webpack (not Babel itself).\n           // It enables caching results in ./node_modules/.cache/babel-loader/\n           // directory for faster rebuilds.\n           cacheDirectory: true,\n         },\n       },\n<span class="token inserted">+      {</span>\n<span class="token inserted">+        test: /\\.(svg)$/i,</span>\n<span class="token inserted">+        loader: \'svg-sprite-loader\',</span>\n<span class="token inserted">+        include: [</span>\n<span class="token inserted">+          require.resolve(\'antd-mobile\').replace(/warn\\.js$/, \'\'),  // 1. svg files of antd-mobile</span>\n<span class="token inserted">+          // path.resolve(__dirname, \'src/my-project-svg-foler\'),  // folder of svg files in your project</span>\n<span class="token inserted">+        ]</span>\n<span class="token inserted">+      },</span>\n<span class="token inserted">+      {</span>\n<span class="token inserted">+        test: /\\.less$/,</span>\n<span class="token inserted">+        use: [</span>\n<span class="token inserted">+          require.resolve(\'style-loader\'),</span>\n<span class="token inserted">+          require.resolve(\'css-loader\'),</span>\n<span class="token inserted">+          {</span>\n<span class="token inserted">+            loader: require.resolve(\'postcss-loader\'),</span>\n<span class="token inserted">+            options: {</span>\n<span class="token inserted">+              ident: \'postcss\', // https://webpack.js.org/guides/migrating/#complex-options</span>\n<span class="token inserted">+              plugins: () => [</span>\n<span class="token inserted">+                autoprefixer({</span>\n<span class="token inserted">+                  browsers: [\'last 2 versions\', \'Firefox ESR\', \'> 1%\', \'ie >= 8\', \'iOS >= 8\', \'Android >= 4\'],</span>\n<span class="token inserted">+                }),</span>\n<span class="token inserted">+                pxtorem({ rootValue: 100, propWhiteList: [] })</span>\n<span class="token inserted">+              ],</span>\n<span class="token inserted">+            },</span>\n<span class="token inserted">+          },</span>\n<span class="token inserted">+          {</span>\n<span class="token inserted">+            loader: require.resolve(\'less-loader\'),</span>\n<span class="token inserted">+            options: {</span>\n<span class="token inserted">+              modifyVars: { "@primary-color": "#1DA57A" },</span>\n<span class="token inserted">+            },</span>\n<span class="token inserted">+          },</span>\n<span class="token inserted">+        ],</span>\n<span class="token inserted">+      },</span>\n       // "postcss" loader applies autoprefixer to our CSS.\n       // "css" loader resolves paths in CSS and adds assets as dependencies.\n       // "style" loader turns CSS into JS modules that inject &lt;style> tags.'},["code","--- a/config/webpack.config.dev.js\n+++ b/config/webpack.config.dev.js\n@@ -1,6 +1,7 @@\n 'use strict';\n\n const autoprefixer = require('autoprefixer');\n+const pxtorem = require('postcss-pxtorem');\n const path = require('path');\n const webpack = require('webpack');\n const HtmlWebpackPlugin = require('html-webpack-plugin');\n@@ -88,7 +89,7 @@ module.exports = {\n     // for React Native Web.\n     extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],\n     alias: {\n-\n+\n       // Support React Native Web\n       // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/\n       'react-native': 'react-native-web',\n@@ -118,7 +119,7 @@ module.exports = {\n           {\n             options: {\n               formatter: eslintFormatter,\n-\n+\n             },\n             loader: require.resolve('eslint-loader'),\n           },\n@@ -144,6 +145,8 @@ module.exports = {\n           /\\.gif$/,\n           /\\.jpe?g$/,\n           /\\.png$/,\n+          /\\.less$/,\n+          /\\.svg$/,\n         ],\n         loader: require.resolve('file-loader'),\n         options: {\n@@ -167,13 +170,48 @@ module.exports = {\n         include: paths.appSrc,\n         loader: require.resolve('babel-loader'),\n         options: {\n-\n+          plugins: [\n+            ['import', { libraryName: 'antd-mobile', style: true }],\n+          ],\n           // This is a feature of `babel-loader` for webpack (not Babel itself).\n           // It enables caching results in ./node_modules/.cache/babel-loader/\n           // directory for faster rebuilds.\n           cacheDirectory: true,\n         },\n       },\n+      {\n+        test: /\\.(svg)$/i,\n+        loader: 'svg-sprite-loader',\n+        include: [\n+          require.resolve('antd-mobile').replace(/warn\\.js$/, ''),  // 1. svg files of antd-mobile\n+          // path.resolve(__dirname, 'src/my-project-svg-foler'),  // folder of svg files in your project\n+        ]\n+      },\n+      {\n+        test: /\\.less$/,\n+        use: [\n+          require.resolve('style-loader'),\n+          require.resolve('css-loader'),\n+          {\n+            loader: require.resolve('postcss-loader'),\n+            options: {\n+              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options\n+              plugins: () => [\n+                autoprefixer({\n+                  browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],\n+                }),\n+                pxtorem({ rootValue: 100, propWhiteList: [] })\n+              ],\n+            },\n+          },\n+          {\n+            loader: require.resolve('less-loader'),\n+            options: {\n+              modifyVars: { \"@primary-color\": \"#1DA57A\" },\n+            },\n+          },\n+        ],\n+      },\n       // \"postcss\" loader applies autoprefixer to our CSS.\n       // \"css\" loader resolves paths in CSS and adds assets as dependencies.\n       // \"style\" loader turns CSS into JS modules that inject <style> tags."]],["blockquote",["p","\u6ce8\u610f\uff0c\u4e0a\u8ff0\u793a\u4f8b\u53ea\u4fee\u6539\u4e86 webpack.config.dev.js\uff0c\u5982\u679c\u9700\u8981\u5728\u751f\u4ea7\u73af\u5883\u751f\u6548\uff0c\u4f60\u9700\u8981\u540c\u6b65\u4fee\u6539 webpack.config.prod.js\u3002"]],["ol",["li",["p","\u5165\u53e3\u9875\u9762\u5fc5\u9700\u7684\u8bbe\u7f6e\uff1a"]],["li",["p","\u5f15\u5165\u300e\u9ad8\u6e05\u65b9\u6848\u300f\u8bbe\u7f6e\uff1a\u5177\u4f53\u65b9\u6cd5\u89c1 wiki \u91cc ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE"},"antd-mobile-0.8-\u4ee5\u4e0a\u7248\u672c\u300c\u9ad8\u6e05\u300d\u65b9\u6848\u8bbe\u7f6e"],"\u3002"]],["li",["p","\u5f15\u5165 ",["a",{title:null,href:"https://github.com/ftlabs/fastclick"},"FastClick"],", \u5173\u8054 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/576"},"#576"]]],["li",["p","\u5f15\u5165 Promise \u7684 fallback \u652f\u6301 (\u90e8\u5206\u5b89\u5353\u624b\u673a\u4e0d\u652f\u6301 Promise)\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>Promise<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  document<span class="token punctuation">.</span><span class="token function">writeln</span><span class="token punctuation">(</span><span class="token string">\'&lt;script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"\'</span><span class="token operator">+</span><span class="token string">\'>\'</span><span class="token operator">+</span><span class="token string">\'&lt;\'</span><span class="token operator">+</span><span class="token string">\'/\'</span><span class="token operator">+</span><span class="token string">\'script>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","if(!window.Promise) {\n  document.writeln('<script src=\"https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js\"'+'>'+'<'+'/'+'script>');\n}"]]]],["h3","React-Native \u9879\u76ee"],["blockquote",["p","rn \u9879\u76ee\u6e90\u7801\u8bf7\u770b ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app"},"antd-mobile-sample/create-react-native-app"]]],["ol",["li",["p","\u4fee\u6539 ",["code",".babelrc"]," \u914d\u7f6e\uff0c\u5e76\u91cd\u65b0\u542f\u52a8\u670d\u52a1"]]],["pre",{lang:"diff",highlighted:'<span class="token coord">--- a/.babelrc</span>\n<span class="token coord">+++ b/.babelrc</span>\n<span class="token coord">@@ -1,5 +1,6 @@</span>\n {\n   "presets": ["babel-preset-expo"],\n<span class="token inserted">+  "plugins": [["import", { "libraryName": "antd-mobile" }]],</span>\n   "env": {\n     "development": {\n       "plugins": ["transform-react-jsx-source"]'},["code",'--- a/.babelrc\n+++ b/.babelrc\n@@ -1,5 +1,6 @@\n {\n   "presets": ["babel-preset-expo"],\n+  "plugins": [["import", { "libraryName": "antd-mobile" }]],\n   "env": {\n     "development": {\n       "plugins": ["transform-react-jsx-source"]']],["ol",["li",["p","\u4fee\u6539 ",["code","App.js"],", \u5f15\u5165 antd-mobile \u6309\u94ae\u7ec4\u4ef6\u3002"]]],["pre",{lang:"diff",highlighted:'<span class="token coord">--- a/App.js</span>\n<span class="token coord">+++ b/App.js</span>\n<span class="token coord">@@ -1,5 +1,7 @@</span>\n import React from \'react\';\n import { StyleSheet, Text, View } from \'react-native\';\n<span class="token inserted">+import { Button } from \'antd-mobile\';</span>\n<span class="token inserted">+</span>\n\n export default class App extends React.Component {\n   render() {\n@@ -8,6 +10,7 @@ export default class App extends React.Component {\n         &lt;Text>Open up App.js to start working on your app!&lt;/Text>\n         &lt;Text>Changes you make will automatically reload.&lt;/Text>\n         &lt;Text>Shake your phone to open the developer menu.&lt;/Text>\n<span class="token inserted">+        &lt;Button>antd-mobile button&lt;/Button></span>\n       &lt;/View>\n     );\n   }'},["code","--- a/App.js\n+++ b/App.js\n@@ -1,5 +1,7 @@\n import React from 'react';\n import { StyleSheet, Text, View } from 'react-native';\n+import { Button } from 'antd-mobile';\n+\n\n export default class App extends React.Component {\n   render() {\n@@ -8,6 +10,7 @@ export default class App extends React.Component {\n         <Text>Open up App.js to start working on your app!</Text>\n         <Text>Changes you make will automatically reload.</Text>\n         <Text>Shake your phone to open the developer menu.</Text>\n+        <Button>antd-mobile button</Button>\n       </View>\n     );\n   }"]],["h2","\u81ea\u5b9a\u4e49\u4e3b\u9898"],["h3","Web \u9879\u76ee"],["p","  \u8bf7\u67e5\u770b  ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui"},"antd-mobile-sample/web-custom-ui"]," / ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro"},"antd-mobile-sample/web-custom-ui-pro"]," \u9879\u76ee"],["h3","React-Native \u9879\u76ee\uff1a"],["p","  \u9879\u76ee\u6e90\u7801\u8bf7\u67e5\u770b: ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui"},"antd-mobile-samples/rn-custom-ui"]],["ol",["li",["p","\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa ",["code","theme.js"]," \u6587\u4ef6\uff0c\u5e76\u8986\u76d6\u4f60\u8981\u6539\u5199\u7684\u53d8\u91cf\u503c\uff0ceg\uff1a"],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  brand_primary<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n  color_link<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n  border_color_base<span class="token punctuation">:</span> <span class="token string">\'green\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = {\n  brand_primary: 'red',\n  color_link: 'red',\n  border_color_base: 'green',\n};"]]],["li",["p","\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",["code","scripts/custom-rn-theme.js"]," \u6587\u4ef6\uff0c\u6587\u4ef6\u5185\u5bb9 copy ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/blob/master/rn-custom-ui/scripts/custom-rn-theme.js"},"rn-custom-ui/scripts/custom-rn-theme.js"]," \u8be5\u6587\u4ef6\u5185\u5bb9\u5373\u53ef\uff1b"]],["li",["p","\u6539\u5199 ",["code","package.json"]," \u4e2d ",["code","start"]," \u547d\u4ee4\u5982\u4e0b\uff1a"],["pre",{lang:"json",highlighted:'<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  ...\n  <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"node scripts/custom-rn-theme &amp;&amp; react-native-scripts start"</span><span class="token punctuation">,</span>\n  ...\n<span class="token punctuation">}</span>'},["code",'"scripts": {\n  ...\n  "start": "node scripts/custom-rn-theme && react-native-scripts start",\n  ...\n}']],["p","  \u91cd\u65b0\u6267\u884c ",["code","npm start"],"\u3002"],["blockquote",["p","Note: \u5355\u4e2a\u7ec4\u4ef6\u6539\u5199\u90e8\u5206\u6837\u5f0f\u7684\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003\uff1a ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831"},"ant-design-mobile/issues/1174"],"\uff0c \u76ee\u524d 1.x \u652f\u6301"]]]]],meta:{order:3,title:"\u5728 create-react(-native)-app \u4e2d\u4f7f\u7528",filename:"docs/react/use-with-create-react-app.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5\u548c\u521d\u59cb\u5316",title:"\u5b89\u88c5\u548c\u521d\u59cb\u5316"},"\u5b89\u88c5\u548c\u521d\u59cb\u5316"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5f15\u5165-antd-mobile",title:"\u5f15\u5165 antd-mobile"},"\u5f15\u5165 antd-mobile"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u81ea\u5b9a\u4e49\u4e3b\u9898",title:"\u81ea\u5b9a\u4e49\u4e3b\u9898"},"\u81ea\u5b9a\u4e49\u4e3b\u9898"]]]}}});