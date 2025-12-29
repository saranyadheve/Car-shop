/* SIDE MENU */
function openMenu() {
    document.getElementById("sideMenu").style.left = "0";
    document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
    document.getElementById("sideMenu").style.left = "-270px";
    document.getElementById("overlay").style.display = "none";
}

/* DARK MODE */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* SEARCH FUNCTION */
function searchCars() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cars = document.querySelectorAll(".car-card");

    cars.forEach(car => {
        let name = car.querySelector("h3").innerText.toLowerCase();
        car.style.display = name.includes(input) ? "block" : "none";
    });
}

/* CATEGORY FILTER */
function filterCategory(category) {
    let cars = document.querySelectorAll(".car-card");
    let buttons = document.querySelectorAll(".categories button");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    cars.forEach(car => {
        if (category === "All" || car.dataset.category === category) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }
    });
}

/* PRICE FILTER */
function filterPrice() {
    let maxPrice = document.getElementById("priceRange").value;
    document.getElementById("priceValue").innerText = `0 - ${maxPrice}`;

    let cars = document.querySelectorAll(".car-card");

    cars.forEach(car => {
        let price = parseInt(car.dataset.price);
        car.style.display = price <= maxPrice ? "block" : "none";
    });
}