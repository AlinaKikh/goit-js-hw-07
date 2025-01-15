const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const itemsCount = item.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
});

const headers = document.querySelectorAll("#categories .item > h2");
headers.forEach(header => {
  header.classList.add("header");
});

const listItems = document.querySelectorAll("#categories .item > ul > li");
listItems.forEach(item => {
  item.classList.add("list-item");
});


