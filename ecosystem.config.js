module.exports = {
  apps: [
    {
      name: "website-dev",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      env: {
        NODE_ENV: "production", // Change to production so it serves your optimized yarn build!
        PORT: 3001
      }
    },
    {
      name: "website-main",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};