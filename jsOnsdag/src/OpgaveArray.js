//a
var boys = ["Peter","lars","Ole"];
var girls = ["Janne","hanne","Sanne"];

//b
var all = boys.concat(girls);

//c
var reduced = all.join();
var reducedHyphen = all.join("-");

//d
all.push("Lone","Gitte");

//e
all.unshift("Hans","Kurt");

//f
all.shift();

//g
all.pop();

//h
all.splice(3,2);

//i
all.reverse();

//j
all.sort();

//k
all.sort(function(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if( a == b) return 0;
    return a < b ? -1 : 1;
});

//l
var newAll = all.map(myFunction);

function myFunction(name){
    
   return name.charAt(0).toUpperCase() + name.slice(1);  
}//myFunction

//m
var onlyIL = newAll.filter((name) => {
    return name.charAt(0) == "L" || name.charAt(0) == "l"
});

console.log(onlyIL);