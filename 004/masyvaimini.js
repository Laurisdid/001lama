function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let masyvas=[];
for (let i=0;i<30;i++){
    masyvas.push(rand(5,25))
}
console.table(masyvas)

// 2
//10
const ma=[rand(5,25),rand(5,25)]
for(let i=2;i<10;i++){
    ma.push(ma[i-1]+ma[i-2]);
}
