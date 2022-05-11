function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let masyvas=[];
for (let i=0;i<30;i++){
    masyvas.push(rand(5,25))
}
console.table(masyvas)

// 2