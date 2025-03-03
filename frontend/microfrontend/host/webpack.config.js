module.exports = {
  name: "mainApp",
  remotes: {
    photos: "photos@http://localhost:3001/remoteEntry.js",
    profile: "profile@http://localhost:3003/remoteEntry.js",
    auth: "auth@http://localhost:3003/remoteEntry.js"
  },
  shared: ["react", "react-dom"]
}; 