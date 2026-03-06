// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://DKuzibaev.github.io/dispatch",  // твой Pages URL
  base: "/dispatch/",                             // важный параметр для корректных путей
  output: "static",
});