function rand(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
//uzd 8
let uzd1 = 0;

while ( uzd1 !== 5){
    uzd1= rand(0,10)
    console.log(uzd1);
}

console.log('---------------------9----------------------------');
let uzd9=0;
let sk9=0;
while(uzd9<100){
    sk9=rand(0,10);
    console.log(sk9);
    uzd9=uzd9 + sk9;
    // console.log(uzd9)
}

console.log('---------------------10----------------------------');
let uzd10 = 0;
let cikl10=0;
while (uzd10 !==5 && uzd10 !== 7){
    uzd10 = rand(0,10);
    cikl10++;
    console.log(uzd10, cikl10);
}
console.log('---------------------11----------------------------');
let uzd11 = 0;
let sum11=0;
let cikl11=0;

while (sum11 <20 || cikl11 <11){
    cikl11++;
    uzd11 = rand(0,10);
    console.log(uzd11);
    sum11=sum11+uzd11;
}
console.log(sum11, cikl11)

console.log('---------------------12----------------------------');
let uzdrnd12 =0;
let nelyg12=0;

while (nelyg12 < 3){
    uzdrnd12= rand(0,10);
    console.log(uzdrnd12);
    if (uzdrnd12 %2=== 1){
        nelyg12++;
    }
}

console.log('---------------------13----------------------------');

let uzd13a =0;let uzd13b=1;
while(uzd13a != uzd13b){
    uzd13a= rand(0,10);
    uzd13b= rand(0,10);
    console.log(uzd13a,"  ", uzd13b);
}

console.log('---------------------14----------------------------');
let sk14a =0; let sk14b=0;
let sum14a=0; let sum14b=0;
while (sum14a <100 && sum14b<100){
    sk14a = rand(0,10);
    sk14b= rand(0,10);
    sum14a+=sk14a;
    sum14b+=sk14b;
    console.log(sum14a," ",sum14b)
}


console.log('---------------------15----------------------------');


let uzdrnd15a =0;
let uzdrnd15b =0;
let nelyg15a=0;
let nelyg15b=0;

while (nelyg15a < 3 || nelyg15b<3){
    uzdrnd15a= rand(0,10);  uzdrnd15b= rand(0,10);
    console.log(uzdrnd15a," ",uzdrnd15b);
    if (uzdrnd15a %2=== 1){
        nelyg15a++;
    }
    if (uzdrnd15b %2=== 1){
        nelyg15b++;
    }
}
