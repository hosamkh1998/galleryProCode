function onInit() {
  console.log("onInit");
  productsFiltered = products;
  renderProducts();
  onFilter();
}

var productsFiltered = [];
var products = [
  {
    image: "https://i.ibb.co/Mk6cWgG/galaxy-charger-with-cable.png",
    title: "מטען סמסונג מקורי",
    description: "מטען סמסונג מקורי עם קבלת נטען וקבלת טלפון",
    date: "2019-01-01",
    location: "מדף A21",
  },
  {
    image: "https://i.ibb.co/RCYkB25/galaxy-headset.png",
    title: "אוזניות סמסונג מקורי",
    description: "אוזניות סמסונג מקורי עם קבלת נטען וקבלת טלפון",
    date: "2020-01-01",
    location: "מדף A21",
  },
  {
    image: "https://i.ibb.co/G7jCpd6/dell-e5450.png",
    title: "מחשב נייד DELL",
    description: "מחשב נייד DELL גרפיקה טובה ומסך גדול",
    date: "2015-08-01",
    location: "מדף A22",
  },
  {
    image: "https://i.ibb.co/PxtydSr/dell-14.png",
    title: "מחשב נייד ASUS",
    description: "מחשב נייד ASUS גרפיקה טובה ומסך גדול",
    date: "2015-08-31",
    location: "מדף C72",
  },
  {
    image: "https://i.ibb.co/6PK2bYy/dell-e3580.png",
    title: "מחשב נייד SONY",
    description: "מחשב נייד SONY גרפיקה טובה ומסך גדול",
    date: "2013-06-05",
    location: "מדף A56",
  },
  {
    image: "https://i.ibb.co/S3xrSTT/active2.png",
    title: "שעון יד סמסונג",
    description: "שעון יד סמסונג מסוג ספורט",
    date: "2016-01-01",
    location: "מדף A28",
  },
];

var productsList = document.querySelector(".productsList");

function renderProducts() {
  htmlStr = "";
  productsFiltered.forEach(function (product) {
    htmlStr += `<div class="card ms-2 mb-2 itemProduct">
        <img
          src="${product.image}"
          class="card-img-top mt-1"
          alt="${product.title}"
          style="width: 100%; height: 200px; object-fit: contain"
        />
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">
            ${product.description}
          </p>
          <p>
            <span class="text-primary d-flex align-items-center"
              ><span class="material-symbols-outlined ms-1">
                calendar_month
              </span>
              ${product.date}</span
            >
          </p>
          <p class="d-flex align-items-center">
            <span class="material-symbols-outlined"> location_on </span>
            ${product.location}
          </p>
        </div>
      </div>`;
  });
  productsList.innerHTML = htmlStr;
}

function onFilter() {
  var filterBy = document.querySelector(".filteredBy").value;
  console.log("onFilter", filterBy);
  productsFiltered = products.filter(function (product) {
    return (
      product.title.toLowerCase().includes(filterBy.toLowerCase()) ||
      product.description.toLowerCase().includes(filterBy.toLowerCase()) ||
      product.location.toLowerCase().includes(filterBy.toLowerCase()) ||
      product.date.toLowerCase().includes(filterBy.toLowerCase())
    );
  });
  renderProducts();
}
