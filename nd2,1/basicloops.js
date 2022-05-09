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