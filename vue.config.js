module.exports = {
  pluginOptions: {
    electronBuilder: {
      // preload: 'src/preload.js',
      // Or, for multiple preload files:
      // preload: { preload: 'src/preload.js' },
      nodeIntegration: true,
      // builderOptions: {
      //   appId: "com.github.dreiekk.electron-auto-update-test",
      //   productName: "electron-auto-update-test",
      // }
    }
  }
}