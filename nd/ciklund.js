console.log('veikia');

//ciklu nd
//    https://docs.google.com/document/d/1QHZ0Hhx5VM6o_eb_rgq_AeiAibvzKgCzs9jG-UtXKCU/

console.log('uzd ----------1---------------');
function rand(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

let a1= rand(5,25);
let b1= rand(5,25);
let c1= rand(5,25);

let suma = a1+b1+c1;
console.log(suma);
console.log(""+a1,""+b1,""+c1);
console.log(""+a1," ",""+b1," ",""+c1);
console.log(""+a1," ",""+b1," ",""+c1," ",""+suma);


console.log('uzd ----------2---------------');
let uzd2 = rand(5,10);
console.log(uzd2);
console.log('uzd ----------3---------------');
let labas= "labas";
for(i=0;i<5;i++){
    console.log(labas)
}
console.log('uzd ----------4---------------');
for(i=0;i<7;i++){
    console.log(uzd2)
}
console.log('uzd ----------5---------------');
for(i=0;i<uzd2;i++){
    console.log(uzd2)
}
console.log('uzd ----------6---------------');
if(uzd2>7){
    for(i=0;i<uzd2;i++){
        console.log(uzd2)
    }
}else{
    console.log("skaicius buvo mazesnis uz 7");
}
console.log('uzd ----------7---------------');
