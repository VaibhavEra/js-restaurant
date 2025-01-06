export default (function () {
  const h21 = document.createElement("h2");
  const ul1 = document.createElement("ul");
  const li1 = document.createElement("li");
  const div = document.querySelector("#content");

  h21.textContent = "Breakfast";
  li1.textContent = "Rajma and rice for breakfast";
  div.append(h21);
  div.append(ul1);
  ul1.innerHTML = `
    <li>${li1.textContent}</li>
    <li>${li1.textContent}</li>
    <li>${li1.textContent}</li>`;

  const h22 = document.createElement("h2");
  const ul2 = document.createElement("ul");
  const li2 = document.createElement("li");

  h22.textContent = "Lunch";
  li2.textContent = "Rajma and Rice all the way!";
  div.append(h22);
  div.append(ul2);
  ul2.innerHTML = `
    <li>${li2.textContent}</li>
    <li>${li2.textContent}</li>
    <li>${li2.textContent}</li>`;

  const h23 = document.createElement("h2");
  const ul3 = document.createElement("ul");
  const li3 = document.createElement("li");

  h23.textContent = "Dinner";
  li3.textContent = "Whatchu think fool? It's Rajma and Rice";
  div.append(h23);
  div.append(ul3);
  ul3.innerHTML = `
    <li>${li3.textContent}</li>
    <li>${li3.textContent}</li>
    <li>${li3.textContent}</li>`;
});
