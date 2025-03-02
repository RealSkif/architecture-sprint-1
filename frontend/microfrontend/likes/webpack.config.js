module.exports = {
  name: "likes",
  filename: "remoteEntry.js",
  exposes: {
    "./LikeButton": "./src/components/LikeButton",
    "./LikeCounter": "./src/components/LikeCounter"
  },
  shared: ["react", "react-dom"]
}; 