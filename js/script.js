console.log(users);

const TOTAL_RESULT = users.length;
const DISP = 10;

const numberOfItems = users.length;
const numberPerPage = 10;
const currentPage = 1;
const numberOfPages = Math.ceil(numberOfItems / numberPerPage);

let list = document.getElementById("contact-list");

users.forEach((item) => {
  let li = document.createElement("li");
  li.className = "contact-item cf";

  li.innerHTML = `<div class="contact-details">
    <img class="avatar" src="${item.image}"/><h3>"${item.name}"</h3><span class="email">iboya.vat@example.com</span></div>
    <div class="joined-details">
      <span class="date">Joined ${item.joined}</span>
    </div>`;

  list.appendChild(li);
});

document.querySelector(".page-header h3").innerHTML =
  "Total Results " + TOTAL_RESULT;

/////////////////////////////////////////////////////

const list_element = document.getElementById("contact-list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 10;

function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];
    let li = document.createElement("li");
    li.className = "contact-item cf";

    li.innerHTML = `<div class="contact-details">
      <img class="avatar" src="${item.image}"/><h3>"${item.name}"</h3><span class="email">iboya.vat@example.com</span></div>
      <div class="joined-details">
        <span class="date">Joined ${item.joined}</span>
      </div>`;

    wrapper.appendChild(li);
  }
}

function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function PaginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;
  //if we are at a current page,set that button as active
  if (current_page == page) button.classList.add("active");

  //if we click
  button.addEventListener("click", function () {
    current_page = page;
    DisplayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector(".pagination button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

DisplayList(users, list_element, rows, current_page);
SetupPagination(users, pagination_element, rows);
