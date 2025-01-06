import rajmaImg from "./sanjoy-sadhukhan-piYIaen8ThM-unsplash.jpg";
export default (function () {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const em = document.createElement("em");
  const img = document.createElement("img");

  img.src = rajmaImg;

  const div = document.querySelector("#content");

  h1.textContent = "Welcome to Rajma Chawal Dhaba!";
  div.append(h1);
  div.append(p);
  em.textContent =
    "Sometimes the best thing you can do is, relax and eat kidney beans with some rice.";
  p.append(em);
  div.append(img);
});
