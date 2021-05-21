// snowpack.config.js
module.exports = {
    mount: {
        "node_modules/@arcgis/core/assets": {url: "/assets", static: true, resolve: false},
        "src": "/",
    },
    exclude:['**/node_modules/**/*', "**/*.scss"],
    plugins: [["@snowpack/plugin-webpack"]],
    buildOptions:{
        baseUrl:"./"
    }
};