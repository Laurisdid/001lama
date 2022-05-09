// let a =0;
// while (true){
// if (++a >100){
//     console.log('avarija');
//     break;
// }
// }


// for(let i=0;i<10;i++){
//     if(1==2){
//         break;
//     }
//     if ( i == 6-1){
//         continue ;  // nuttraukia esama rata
//     }
//     console.log(`dabar sukasi ${i+1} ratas`);
// }
// let b;let c;

// do {
//     if (a++ >100){
//         console.log('avarija');
//         break;
//     }

// }while(c < -10);

// console.log(b,c);


for (let i=1;i<5;i++){
    console.log(`sukasi didyaia ${i+1} ciklas`)
    for (let k=1;k<5;k++){
        console.log(`sukasi vidinis ${k+1} ciklas`)
    }
}

console.log('----------_______________-------------____________-------------');
function rand(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

const kotletoKasniai = rand(10,30)
let kotletasSuvalgytasPerKrimst =0;

for (let i=0;i<kotletoKasniai;i++){
    // const gabaliukasSukramtomas =rand(1,10);
    // kotletasSuvalgytasPerKrimst+=gabaliukasSukramtomas;

    do{
        kotletasSuvalgytasPerKrimst++;
    }while(rand(0,4))
}
console.log(kotletasSuvalgytasPerKrimst);