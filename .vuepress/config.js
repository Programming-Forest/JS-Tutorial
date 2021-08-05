const sidebar = require("../path");

module.exports = {
  title: "JS-Tutorial",
  description: "about JavaScript",
  dest: "build",
  base: "/JS-Tutorial/",
  themeConfig: {
    sidebar,
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/republic-of-JS",
      },
      {
        text: "Discord",
        link: "https://discord.gg/68dBHx56rm",
      },
    ],
  },
};
