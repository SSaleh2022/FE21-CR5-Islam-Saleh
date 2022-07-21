"use strict";
let all = [];
class location1 {
    constructor(name, image, ZIP_code, address, city, date) {
        this.name = name;
        this.image = image;
        this.city = city;
        this.ZIP_code = ZIP_code;
        this.address = address;
        this.date = date;
        all.push(this);
    }
    display() {
        return `
     <div class="col-lg-3 col-md-6 col-xs-12">

     <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
         <img src="${this.image}" class="card-img-top d-none d-sm-none d-md-block d-lg-block gallery">
  <div class="card-body">
  <h5>Places</h5>
  <h5 class="card-title text-center ">${this.name}</h5>
    <h4 class="card-title ">${this.city}</h4>
    <p class="card-text ">Address  ${this.address}</p>
      <p class="card-text ">ZIP_code  ${this.ZIP_code} </p>
    <p class="card-text ">Created: ${this.date}</p>
            </div>
        </div>
        </div>
    `;
    }
}
class restaurants extends location1 {
    constructor(name, image, ZIP_code, address, city, date, tel, dishes, URL) {
        super(name, image, ZIP_code, address, city, date);
        this.tel = tel;
        this.dishes = dishes;
        this.URL = URL;
    }
    display() {
        return ` 
    <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <img src="${this.image}" class="card-img-top d-none d-sm-none d-md-block d-lg-block gallery">
    <div class="card-body">
    <h5>Restaurant</h5>
  <h5 class="card-title text-center ">${this.name}</h5>
    <h4 class="card-title ">${this.city}</h4>  
    <p class="card-text ">Address ${this.address}</p>
    <p class="card-text ">ZIP_code ${this.ZIP_code} </p>
      <p class="card-text ">Tel : ${this.tel}</p>
      <p class="card-text ">Dishes : ${this.dishes}</p>
      <p class="card-text "> Website : 
      <a href="#" class="btn btn-primary" target='_blank'>${this.URL}</a></p>
      <p class="card-text ">Created: ${this.date}</p>
            </div>
         </div>
         </div>
        
     `;
    }
}
class Events extends location1 {
    constructor(name, image, ZIP_code, address, city, date, TicketPrice) {
        super(name, image, ZIP_code, address, city, date);
        this.TicketPrice = TicketPrice;
    }
    display() {
        return ` 
    <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <img src="${this.image}" class="card-img-top d-none d-sm-none d-md-block d-lg-block gallery">
    <div class="card-body">
    <h5>Place</h5>
  <h5 class="card-title text-center ">${this.name}</h5>
    <h4 class="card-title ">${this.city}</h4>
      <p class="card-text ">Address  ${this.address}</p>
      <p class="card-text ">ZIP_code  ${this.ZIP_code} </p>
      <p class="card-text ">Price : ${this.TicketPrice} EUR</p>
      <p class="card-text ">Created: ${this.date}</p>
   
            </div>
         </div>
         </div>
      
    `;
    }
}
let card1 = new location1("St. Charles Church", "./images/St. Charles Church.jpg", 1010, "karlsplatz 1", "Vienna", new Date(2027, 4, 4, 17, 23, 42, 11));
let card2 = new location1("Zoo Vienna", "./images/Zoo Vienna.jpg", 1130, "Maxingstraße13b", "Wien", new Date(2023, 4, 4, 17, 23, 42, 11));
let card3 = new restaurants("Lemon Leaf Thai Restaurant", "./images/Lemon Leaf Thai Restaurant.png", 1050, "Kettenbrückengasse 19", "Vienna", new Date(2021, 4, 4, 17, 23, 42, 11), "+4315812308", "Indian", "www.lemonleaf.at");
let card4 = new restaurants("SIXTA", "./images/SIXTA.png", 1050, "Schönbrunner Straße 21", "Vienna", new Date(2022, 4, 4, 17, 23, 42, 11), "+4315852856", "Viennes", "www.sixta-restaurant.at");
let card5 = new Events("Lenny Kravitz", "./images/Lenny Kravitz.jpg", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "Wien", new Date(2024, 4, 4, 17, 23, 42, 11), "58,50");
let card6 = new Events("Kris Kristofferson", "./images/Kris Kristofferson.jpg", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1,", "Wien", new Date(2025, 4, 4, 17, 23, 42, 11), "47,80");
document.querySelector(".sortdown").addEventListener("click", datesort);
function datesort() {
    all.sort(function (a, b) {
        return a.date - b.date;
    });
    document.getElementById("result").innerHTML = "";
    FFA();
}
;
document.querySelector(".sortup").addEventListener("click", datesort1);
function datesort1() {
    all.sort(function (a, b) {
        return b.date - a.date;
    });
    document.getElementById("result").innerHTML = "";
    FFA();
}
;
// function FFA() {
// for ( let val of all) {
//     (document.getElementById("result") as HTMLElement).innerHTML += "<p>" + val.display()+ "</p>";
// }
// }
function FFA() {
    all.forEach((val) => {
        document.getElementById("result").innerHTML += val.display();
    });
}
FFA();
