module.exports = {
  apps: [
    {
      name: "website-dev",
      script: "yarn",
      args: "start",
      env: {
        NODE_ENV: "development",
        PORT: 3001
      }
    },
    {
      name: "website-main",
      script: "yarn",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};