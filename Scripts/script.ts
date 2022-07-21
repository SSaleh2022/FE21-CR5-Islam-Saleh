let all: Array<location1> = [];

class location1 {
    name: string;
	image: string;
    city: string;
	ZIP_code: number;
	address: string;
    DateTime: any;
 
	constructor(name:string, image: string, ZIP_code: number, address: string, city: string, DateTime: any) {
	this.name = name;
    this.image = image;
    this.city = city;
	this.ZIP_code = ZIP_code;
	this.address = address;
    this.DateTime = DateTime;
    all.push(this);

}


    display(){
     return `
     <div class="col-lg-3 col-md-6 col-xs-12">

     <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
         <img src="${this.image}" class="card-img-top d-none d-sm-none d-md-block d-lg-block" >
  <div class="card-body">
  <h5>Places</h5>
  <h5 class="card-title text-center ">${this.name}</h5>
    <h4 class="card-title ">${this.city}</h4>
    <p class="card-text ">The address is ${this.address}</p>
      <p class="card-text ">ZIP_code is ${this.ZIP_code} </p>
    <p class="card-text ">Created: ${this.DateTime}</p>
            </div>
        </div>
        </div>
    `;
    }
 }

class restaurants extends location1{
    tel: any;
    dishes: string;
    URL: any;
    constructor(name:string, image: string, ZIP_code: number, address: string, city: string, DateTime: any, tel: any, dishes: string, URL: any) {
    super(name,image, ZIP_code, address, city, DateTime);
    this.tel = tel;
    this.dishes = dishes;
    this.URL = URL;
}

display(){
    return ` 
    <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <img src="${this.image}" class="card-img-top d-none d-sm-none d-md-block d-lg-block" >
    <div class="card-body">
    <h5>Restaurant</h5>
  <h5 class="card-title text-center ">${this.name}</h5>
    <h4 class="card-title ">${this.city}</h4>  
    <p class="card-text ">The address is ${this.address}</p>
    <p class="card-text ">ZIP_code is ${this.ZIP_code} </p>
      <p class="card-text ">Tel : ${this.tel}</p>
      <p class="card-text ">Dishes : ${this.dishes}</p>
      <p class="card-text "> Website : 
      <a href="#" class="btn btn-primary" target='_blank'>${this.URL}</a></p>
      <p class="card-text ">Created: ${this.DateTime}</p>
            </div>
         </div>
         </div>
        
     `;
    }
}
class Events extends location1{
TicketPrice: any;
constructor(name:string,image: string, ZIP_code: number, address: string, city: string, DateTime: any, TicketPrice: any) {
super(name,image, ZIP_code, address, city, DateTime);
this.TicketPrice = TicketPrice;
}
    


display(){
    return ` 
    <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <img src="${this.image}" class="card-img-top d-none d-sm-none d-md-block d-lg-block" >
    <div class="card-body">
    <h5>Place</h5>
  <h5 class="card-title text-center ">${this.name}</h5>
    <h4 class="card-title ">${this.city}</h4>
      <p class="card-text ">The address is ${this.address}</p>
      <p class="card-text ">ZIP_code is ${this.ZIP_code} </p>
      <p class="card-text ">Price : ${this.TicketPrice} EUR</p>
      <p class="card-text ">Created: ${this.DateTime}</p>
   
            </div>
         </div>
         </div>
      
    `;
    }
}

let card1 = new location1 ("St. Charles Church","./images/St. Charles Church.jpg", 1010, "karlsplatz 1", "Vienna", "24.03.2021 12:45");
let card2 = new location1 ("Zoo Vienna","./images/Zoo Vienna.jpg", 1130, "Maxingstraße13b",  "Wien", "24.03.2021 12:45");
let card3 = new restaurants ("Lemon Leaf Thai Restaurant","./images/Lemon Leaf Thai Restaurant.png", 1050, "Kettenbrückengasse 19", "Vienna", "24.03.2021 12:45", "+4315812308", "Indian", "www.lemonleaf.at");
let card4 = new restaurants ("SIXTA","./images/SIXTA.png", 1050, "Schönbrunner Straße 21","Vienna", "24.03.2021 12:45", "+4315852856", "Viennes", "www.sixta-restaurant.at");
let card5 = new Events ("Lenny Kravitz","./images/Lenny Kravitz.jpg", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "Wien", "24.03.2021 12:45", "58,50");
let card6 = new Events ("Kris Kristofferson","./images/Kris Kristofferson.jpg", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1,", "Wien","24.03.2021 12:45", "47,80");




(document.querySelector(".sortdown") as HTMLElement).addEventListener("click", DateTimesort)
function DateTimesort () {
    all.sort(function(a, b) {
        return a.DateTime - b.DateTime
    });
    (document.getElementById("result") as HTMLElement).innerHTML ="";
    FFA();
};

(document.querySelector(".sortup") as HTMLElement).addEventListener("click", DateTimesort1)
function DateTimesort1 () {
    all.sort(function(a, b) {
        return b.DateTime - a.DateTime
    });
    (document.getElementById("result") as HTMLElement).innerHTML ="";
    FFA();
};

// function FFA() {
// for ( let val of all) {
//     (document.getElementById("result") as HTMLElement).innerHTML += "<p>" + val.display()+ "</p>";
// }
// }

function FFA() {
    
    all.forEach((val) => {
        (document.getElementById("result") as HTMLElement).innerHTML += val.display();
    });
}

FFA();