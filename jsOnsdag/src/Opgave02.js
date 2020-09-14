//1

var namesArr = ["Lars", "Bo", "Ingolf", "Egon", "Stuart", "Ib", "Knud", "Joe"];

var namesArrShort = namesArr.filter((name) => {
    return name.length <= 3
});

//console.log(namesArrShort);
//console.log(namesArr);

//2

var namesArrCAPS = namesArr.map(myFunction) 

function myFunction(name){
    return name.toUpperCase();
}

//console.log(namesArrCAPS);

//3

var listArr = "<u1>"+"<li>"+namesArr.join("</li><li>") + "</li>" + "</ul>"; 
//console.log(listArr);

//4

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var carsNew = cars.filter((item) => {
    return item.year > 1999
})

var carsVolvo = cars.filter((item) => {
    return item.make == "Volvo"
})

var carsCheap = cars.filter((item) => {
    return item.price < 5000
})
//console.log(carsNew);
//console.log(carsVolvo);
//console.log(carsCheap);

//4a

    var values = cars.map(function(car){
       var code = "INSERT INTO cars (id,year,make,model,price) VALUES ";

       var code2 =  "(" + car.id + ", " + car.year + ", " + car.make + ", " + car.model + ", " + car.price + ");";
            return code + code2;
    });
    //console.log(values);

