module.exports = {
  name: "photos",
  filename: "remoteEntry.js",
  exposes: {
    "./PhotoGallery": "./src/components/AddPlacePopup.js",
    "./UploadPhoto": "./src/components/Card.js",
    "./DeletePhoto": "./src/components/ImagePopup.js"
  },
  shared: ["react", "react-dom"]
}; 