module.exports = {
  name: "photos",
  filename: "remoteEntry.js",
  exposes: {
    "./PhotoGallery": "./src/components/PhotoGallery",
    "./UploadPhoto": "./src/components/UploadPhoto",
    "./DeletePhoto": "./src/components/DeletePhoto"
  },
  shared: ["react", "react-dom"]
}; 