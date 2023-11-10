import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Home",
    link: "/"
  },
  {
    text: "Articles",
    icon: "pen-to-square",
    prefix: "/articles/",
    children: [
      {
        text: "People and processes",
        icon: "pen-to-square",
        prefix: "people-and-processes/",
        children: [
          "measuring-maturity-teamcompany",
          "realistic-processes"
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
