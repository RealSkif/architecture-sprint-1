module.exports = {
  name: "profile",
  filename: "remoteEntry.js",
  exposes: {
    "./ProfileView": "./src/components/ProfileView",
    "./ProfileEdit": "./src/components/ProfileEdit"
  },
  shared: ["react", "react-dom"]
}; 