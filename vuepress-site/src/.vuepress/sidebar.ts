import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Home",
      icon: "home",
      link: "/"
    },
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "Peter M E Frandsen",
      icon: "info",
      link: "intro.html"
    }
  ],
});
