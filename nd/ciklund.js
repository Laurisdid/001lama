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
let kintamasis=0;
let suma7=0;
for(i=0;i<5;i++){
    kintamasis = rand(10,20);
    suma7=suma7+kintamasis;
    console.log(kintamasis);
}
console.log("suma yra "+suma7);


console.log('uzd ---------8---------------');

let sk8=rand(10,25);
console.log("pradinis sugeneruotas ",sk8)
let sum8=0;
let atmesti=0;
let atmestusum=0;
let ciklu8=0;
let lyginiai=0;
let nelyginiai=0;
// for(sk8=0;sk8<12;sk8=rand(10,25)){
// console.log(sk8)
// }

while ( sk8>=12){
    sk8=rand(10,25);
    console.log(sk8);
    ciklu8++;
    if(sk8 <=18){
        sum8=sum8+sk8;
    }else{
        atmestusum=atmestusum+sk8;
        atmesti++;
    }
    if(sk8 % 2 ==0){
        lyginiai++;
    }else{
        nelyginiai++;
    }
}
console.log(ciklu8," buvo atlikta ciklu");
console.log(sum8," suma iki 18");
console.log("atmestu suma =",atmestusum," atmesta kartu =", atmesti);
console.log("lyginiu skaiciu yra ", lyginiai);
console.log("nelyginiu skaiciu yra ", nelyginiai)



// let sk8f;
// for(i=0;i<20;i++){

// sk8f = rand(10,25);
// } 


console.log('uzd ---------9---------------');

let sk9=0;
let vidin=0;
let isorin=0;
let treciolyg=0;
let lygus5=0;

while (sk9 !== 5){
    sk9= rand(5,10);
    isorin++;
    if (sk9 ==5){
        lygus5++;
    }
    for(i=0;i<sk9;i++){
        vidin++;
    }
    if (sk9 == 5 && lygus5<3){
       treciolyg++;
    }
    
}
console.log(`vidinis ciklas sukosi ${vidin} isorinis ciklas sukosi ${isorin} `);




console.log('uzd ---------10---------------');

let k =0;
let p=0;

let kr=0;
let pr=0;

while ( k<=222 || p<= 222){
    kr= rand(10,20)
    pr= rand(5,25)
    if (kr>pr){
        console.log('raunda laimi K')
    }else{
        console.log('raunda laimi P') 
    }
     p=p+pr;
     k=k+kr;
     console.log(` K ${k}           P ${p} `)
}
if (k>p){
    console.log(`zaidima laimi K surinkes ${k} kai jo oponentas p surinko ${p} `) 
}else{
    console.log(`zaidima laimi P surinkes ${p} kai jo oponentas K surinko ${k} `) 
}