module.exports = {
    pwa: {
        manifestPath: 'public/manifest.json',
        workboxPluginMode: 'InjectManifest',
        workboxOptions:{
            swSrc: "service-worker.js"
        }
    }
}