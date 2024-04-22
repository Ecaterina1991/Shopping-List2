const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const container = document.getElementById("container");
const calculPreturi = document.getElementById("sumPrices");

function AddProduct() {
  if (inputBox.value === "") {
    alert("Vă rog să scrieți produsul!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    let numberInput = document.createElement("input");
    numberInput.setAttribute("type", "text");
    numberInput.setAttribute("class", "price");
    numberInput.innerHTML = "";

    numberInput.setAttribute("placeholder", "Pret");
    li.appendChild(numberInput);
    let ron = document.createElement("p");
    ron.setAttribute("class", "ron");
    ron.textContent = "Ron";
    li.appendChild(ron);

    numberInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();

const buttonNum = document.getElementById("message");

buttonNum.addEventListener("click", function () {
  document.body.style.background = 'url("images/shopping1.jpg")';
  document.body.style.backgroundSize = "cover";
  const numberProducts = listContainer.getElementsByTagName("li").length;
  calculPreturi.innerHTML = `În lista de cumpărături s-au introdus ${numberProducts} produse`;
});

const sortButton = document.getElementById("sort");

sortButton.addEventListener("click", function () {
  document.body.style.background = 'url("images/shopping4.jpg")';
  document.body.style.backgroundSize = "cover";
  const arrLi = Array.from(listContainer.getElementsByTagName("li"));
  const textContents = arrLi.map((li) =>
    li.textContent.substring(0, li.textContent.length - 4)
  );
  textContents.sort((a, b) => a.localeCompare(b));
  listContainer.innerHTML = "";
  textContents.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    let numberInput = document.createElement("input");
    numberInput.setAttribute("type", "text");
    numberInput.setAttribute("class", "price");
    numberInput.innerHTML = "";

    numberInput.setAttribute("placeholder", "Pret");
    li.appendChild(numberInput);
    let ron = document.createElement("p");
    ron.setAttribute("class", "ron");
    ron.textContent = "Ron";
    li.appendChild(ron);

    numberInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "");
    });
    calculPreturi.innerHTML =
      "Produsele din listă au fost sortate în ordine alfabetică";
  });
  saveData();
});

function calculateAverage() {
  const priceInputs = document.querySelectorAll(".price");
  let total = 0;
  let count = 0;

  priceInputs.forEach(function (input) {
    const price = parseInt(input.value);
    if (!isNaN(price)) {
      total += price;
      count++;
    }
  });

  const average = count > 0 ? total / count : 0;

  calculPreturi.innerHTML = `Media prețurilor: ${average.toFixed(2)} Ron`;

  document.body.style.background = 'url("images/shopping2.jpg")';
  document.body.style.backgroundSize = "cover";
}

function calculateSum() {
  const priceInputs = document.querySelectorAll(".price");
  let total = 0;

  priceInputs.forEach(function (input) {
    const price = parseInt(input.value);
    if (!isNaN(price)) {
      total += price;
    }
  });
  calculPreturi.innerHTML = `Suma prețurilor: ${total.toFixed(2)} Ron`;

  document.body.style.background = 'url("images/shopping5.jpg")';
  document.body.style.backgroundSize = "cover";
}

const date = new Date();
const year = date.getFullYear();
const placeholderYear = document.querySelector(".year");
const textNode = document.createTextNode(year);
placeholderYear.appendChild(textNode);
