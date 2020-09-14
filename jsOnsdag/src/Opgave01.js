//1
function add(n1, n2){
   return n1 + n2;
}

var sub = function(n1,n2){
  return n1 - n2
} 

var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

//2

//2.1

//console.log( add(1,2) );
// 3

//2.2

//console.log( add );
// [Function: add]

//2.3

//console.log( add(1,2,3) );
// 3

//2.4

//console.log( add(1) );
//NaN

//2.5

//console.log( cb(3,3,add) );
// Result from the two numbers: 3+3=6

//2.6

//console.log( cb(4,3,sub) );
// Result from the two numbers: 4-3=1

//2.7

//console.log(cb(3,3,add()));
// fail, because the add() callback should be a functionname, not a functioncall.

//2.8

//console.log(cb(3,"hh",add));
// Result from the two numbers: 3+hh=3hh


//3

var cb3 = function(n1,n2, callback){
try{
if((typeof callback === "function") && (typeof n1 ==="number") && (typeof n2 === "number")){
  return "Result from the two numbers: "+n1+" and "+n2+" = "+callback(n1,n2)
}else{
  throw new Error("Whoops. you did something wrong")
}
}catch (e){
  console.error(e.name + ": " + e.message)
}
};

//4

function mul(n1,n2){
    return n1 * n2;
}

//console.log(cb3(5,4,mul));

//5

console.log(cb3(25,5,function(n1,n2){
    return n1 / n2;
}));

