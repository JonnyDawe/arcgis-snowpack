// snowpack.config.js
module.exports = {
    mount: {
        "node_modules/@arcgis/core/assets": {url: "/assets", static: true, resolve: false},
        "src": "/",
    },
    plugins: [["@snowpack/plugin-webpack"]]
};