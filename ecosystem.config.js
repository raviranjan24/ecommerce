module.exports = {
  apps: [
    {
      name: "my-next-app",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/home/ubuntu/ecommerce",
      instances: "max",       // or a number like 2
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};