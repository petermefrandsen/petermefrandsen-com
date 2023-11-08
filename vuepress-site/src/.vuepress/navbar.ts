import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Maturity Measurement",
        icon: "pen-to-square",
        prefix: "maturity-measurement/",
        children: [
          "measuring-maturity-teamcompany",
          ],
      },
      {
        text: "Platform Engineering",
        icon: "pen-to-square",
        prefix: "platform-engineering/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1",
          }
        ],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
