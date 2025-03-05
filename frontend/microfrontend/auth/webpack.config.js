module.exports = {
  name: "auth",
  filename: "remoteEntry.js",
  exposes: {
    "./login": "./src/components/Login.js",
    "./register": "./src/components/Register.js",
    "./auth": "./src/utils/auth.js"
  },
  shared: ["react", "react-dom"]
};