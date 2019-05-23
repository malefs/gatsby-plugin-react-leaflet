exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\/node_modules\/react-leaflet|\/node_modules\/leaflet/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}