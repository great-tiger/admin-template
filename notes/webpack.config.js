webpack 配置详解

module.exports = {
    /*
      使webpack支持sourcemap
    */
    devtool: 'eval-source-map',
    /*
      Switch loaders to debug mode.
    */
    debug: true,
    /*
      一个绝对路径，默认值为 process.cwd()；解析entry时，相对于这个context；
    */
    context: path.join(__dirname, "..", "src"),
    /*
      entry有多种传入方式
      entry:'';
      entry: ["./entry1", "./entry2"];
      entry: {
          page1: "./page1",
          page2: ["./entry1", "./entry2"]
      }
    */
    entry: __dirname + "/app/main.js",
    output: {
        /*assets的保存路径*/
        path: __dirname + "/public",
        filename: "bundle.js",
        publicPath: "生成的脚本需要被script标签引用到页面上，引用地址就参考这个设置",
        /*
          "var" - Export by setting a variable: var Library = xxx (default)
          "this" - Export by setting a property of this: this["Library"] = xxx
          "commonjs" - Export by setting a property of exports: exports["Library"] = xxx
          "commonjs2" - Export by setting module.exports: module.exports = xxx
          "amd" - Export to AMD (optionally named - set the name via the library option)
          "umd" - Export to AMD, CommonJS2 or as property in root
        */
        libraryTarget: ''
    },
    resolve: {
        /* alias 别名 猜测 import XXX from "actions" 会把action替换成配置中的值 */
        alias: {
            actions: `${this.srcPathAbsolute}/actions/`,
            components: `${this.srcPathAbsolute}/components/`,
            config: `${this.srcPathAbsolute}/config/${this.env}.js`,
            images: `${this.srcPathAbsolute}/images/`,
            sources: `${this.srcPathAbsolute}/sources/`,
            stores: `${this.srcPathAbsolute}/stores/`,
            styles: `${this.srcPathAbsolute}/styles/`
        },
        /*如：require('underscore') 会尝试添加以下扩展名查找*/
        extensions: ['', '.js', '.jsx', '.css'],
        /* 执行modules 文件夹的名称 ./src ../src 中查找*/
        modulesDirectories: [
            "src", "node_modules"
        ]
    }
    /*
      The webpack dev server can be configured in the same webpack.config.js configuration file, 
      in a separate "devserver" entry.

      contentBase
        By default, the webpack-dev-serverwill serve the files in the root of the project. 
        To serve files from a different folder (such as the "public" folder in our sample project, 
        you need to configure a specific content base.
      port
        Which port to use. If omitted, defaults to "8080".
      inline
        Set to "true" to insert a small client entry to the bundle to refresh the page on change.
      colors
        Add colors to the terminal output when the server is running.
      historyApiFallback
        Useful during the development of single page applications that make use of the HTML5 history API. When set to "true", all requests to thewebpack-dev-serverthat do not map to an existing asset will instead by routed straight to/, that is, theindex.htmlfile.
    */
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        /* 在单页面应用中，用来支持 HTML5 history API*/
        inline: true /* 是否向bundle中，插入用来刷新页面的脚本 */
    }
}
