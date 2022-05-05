
console.log('Labas, ka tu?');


var labas = 'Pats tu labas'; // old schoolas
alio = 'Pats tu alio';  //taspats var

let ku = 'OK';
const kuku = 'OK'


console.log('uzd ----------1---------------');

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
let a = getRandomNumberBetween(0,4);
console.log(a);
let b = getRandomNumberBetween(0,4);
console.log(b);

if (a==0 || b ==0 ){
    console.log ("dalyba is nulio ")
}else if (a>b){
    console.log("ats : "+a/b +" a buvo padalintas is b")
}else if(b>a){
    console.log("ats : "+b/a +" b buvo padalintas is a")
}else{
    console.log(a+" yra lygus "+b+" dalybos ats = 1");
}

console.log('uzd ----------------2----------');


let a2 = getRandomNumberBetween(0,25);
let b2 = getRandomNumberBetween(0,25);
let c2 = getRandomNumberBetween(0,25);

console.log(a2)
console.log(b2)
console.log(c2)

console.log("ats :")

// if ((a2>b2>c2) || (c2>b2>a2)){
//     console.log(b2)
// }else if ((b2>a2>c2) || (c2>a2>b2)){
//     console.log(a2)
// }else if ((a2>c2>b2) || (b2>c2>a2)){
//     console.log(c2)
// }else{
//     console.log("skaiciai lygus")
// }

    //2bandymas

// if (a2>b2>c2){
//     console.log(b2)
// }else if(c2>b2>a2){
//     console.log(b2)
// }else if(b2>a2>c2){
//     console.log(a2)
// }else if(c2>a2>b2){
//     console.log(a2)
// }else if(a2>c2>b2){
//     console.log(c2)
// }else if(b2>c2>a2){
//     console.log(c2)
// }

//3 ;/ 


if (a2>b2 && b2>c2){
    console.log(b2)
}else if(c2>b2 && b2>a2){
    console.log(b2)
}else if(b2>a2 && a2>c2){
    console.log(a2)
}else if(c2>a2 && a2>b2){
    console.log(a2)
}else if(a2>c2 && c2>b2){
    console.log(c2)
}else if(b2>c2 && c2>a2){
    console.log(c2)
}else{
    console.log("yra vienodu skaiciu")
}

console.log('uzd ----------3---------------');
let a3 = getRandomNumberBetween(1,10);
let b3 = getRandomNumberBetween(1,10);
let c3 = getRandomNumberBetween(1,10);

console.log(a3,b3,c3)

if (a3+b3 > c3 && a3+c3 >b3 && b3+c3 >a3){
    console.log("trikampis egzistuotu")
} else{
    console.log("nera trikampio")
}

console.log('uzd ----------4---------------');
let a4 = getRandomNumberBetween(0,2);
let b4 = getRandomNumberBetween(0,2);
let c4 = getRandomNumberBetween(0,2);
let d4 = getRandomNumberBetween(0,2);

console.log(a4,b4,c4,d4);

let nuliu =0;
let vienetu =0;
let dvejetu =0;

if (a4 === 0){
    nuliu++;
}else if(a4==1){
    vienetu++;
}else{
    dvejetu++;
}

if (b4 === 0){
    nuliu++;
}else if(b4==1){
    vienetu++;
}else{
    dvejetu++;
}


if (c4 === 0){
    nuliu++;
}else if(c4==1){
    vienetu++;
}else{
    dvejetu++;
}

if (d4 === 0){
    nuliu++;
}else if(d4==1){
    vienetu++;
}else{
    dvejetu++;
}

console.log ("0 yra : ",nuliu);
console.log ("1 yra : ",vienetu);
console.log ("2 yra : ",dvejetu);

console.log('uzd ----------5---------------');


