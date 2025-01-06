import "./style.css";
import pageLoad from "./page-load.js";
import menujs from "./menu.js";
import aboutjs from "./about.js";
pageLoad();

const div = document.querySelector("#content");

const home = document.querySelector("#home");
home.addEventListener("click", () => {
  div.innerHTML = "";
  pageLoad();
});

const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
  div.innerHTML = "";
  menujs();
});

const about = document.querySelector("#about");
about.addEventListener("click", () => {
  div.innerHTML = "";
  aboutjs();
});
