import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Peter M E Frandsen | Blog",
  description: "A personal blog for Peter M E Frandsen",

  theme

  // Enable it with pwa
  // shouldPrefetch: false,
});
