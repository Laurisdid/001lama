
console.log('Labas, ka tu?');


var labas = 'Pats tu labas'; // old schoolas
alio = 'Pats tu alio';  //taspats var

let ku = 'OK';
const kuku = 'OK'

// if nd
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


let a5 =getRandomNumberBetween(-10,10);
let b5 =getRandomNumberBetween(-10,10);
let c5 =getRandomNumberBetween(-10,10);

console.log(a5,b5,c5);
if (a5 <0 ){
    console.log("+",a5,"+");
}else if(a5> 0){
    console.log("-",a5,"-");
}else{
    console.log("*",a5,"*");
}
if (b5 <0 ){
    console.log("+",b5,"+");
}else if(b5> 0){
    console.log("-",b5,"-");
}else{
    console.log("*",b5,"*");
}
if (c5 <0 ){
    console.log("+",c5,"+");
}else if(c5> 0){
    console.log("-",c5,"-");
}else{
    console.log("*",c5,"*");
}



console.log('uzd ----------6---------------');

let zvakes =getRandomNumberBetween(5,3000);
let kainasunuolaida =0;
console.log(zvakes);

if (zvakes>2000){
    kainasunuolaida=zvakes*0.96
    console.log(kainasunuolaida,"su 4% nuolaida");
}else if(zvakes>1000){
    kainasunuolaida=zvakes*0.97
    console.log(kainasunuolaida,"su 3% nuolaida");
}else{
    console.log(zvakes);
}


console.log('uzd ----------7---------------');

let a7 =getRandomNumberBetween(0,100);
let b7 =getRandomNumberBetween(0,100);
let c7 =getRandomNumberBetween(0,100);
console.log(a7,b7,c7);

let vidurkis=(a7+b7+c7)/3
console.log(vidurkis);

let vidurkisbe
console.log("vidurkis be maziausiu 10 ir didziausiu 10");
if (a7<10 || a7>90){
    console.log("1skaicius netinka");
    a7=0;
}
if (b7<10 || b7>90){
    console.log("2skaicius netinka");
    b7=0;
}
if (c7<10 || c7>90){
    console.log("3skaicius netinka");
    c7=0;
}

if (a7!==0 && b7!==0 && c7!==0){
    vidurkisbe=(a7+b7+c7)/3
    console.log(vidurkisbe);
}else if (a7!==0 && b7!==0 && c7==0){
    vidurkisbe=(a7+b7)/2
    console.log(vidurkisbe);
}else if (a7!==0 && b7==0 && c7!==0){
    vidurkisbe=(a7+c7)/2
    console.log(vidurkisbe);
}else if (a7==0 && b7!==0 && c7!==0){
    vidurkisbe=(b7+c7)/2
    console.log(vidurkisbe);
}else if (a7==0 && b7==0 && c7!==0){
    vidurkisbe=c7
    console.log(vidurkisbe);
}else if (a7==0 && b7!==0 && c7==0){
    vidurkisbe=b7
    console.log(vidurkisbe);
}else if (a7!==0 && b7==0 && c7==0){
    vidurkisbe=a7
    console.log(vidurkisbe);
}