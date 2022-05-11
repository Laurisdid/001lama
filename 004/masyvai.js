function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const pinigine = [];
let piniginesDydis=rand(10, 30);
let Suma = 0;
let kupiuros = 0;
let isleistosMonetos =0;
let didzPinigas=0;
let didzPCount=0;

for (let i = 0; i <piniginesDydis ; i++) {
    let pinigai = rand(0, 10);
    pinigine.push(pinigai);
    Suma += pinigai;
    if(pinigai>2){
        kupiuros+=pinigai;
    }else{
        isleistosMonetos+=pinigai
    }
    if(didzPinigas<pinigai){
        didzPinigas=pinigai;
    }
}




console.table(pinigine)
console.log('pinigu suma ',Suma);
console.log("kupiuru suma ",kupiuros);
console.log("pinigu liko kai isleistos monetos ",Suma-isleistosMonetos);


for (let i = 0; i <piniginesDydis ; i++) {
    if(didzPinigas==pinigine[i]){
        didzPCount++;
    }
    if (pinigine[i]==0){
        pinigine[i]=i;
    }
}

console.log("didziausias $ ", didzPinigas, "ju kiekis", didzPCount);
console.table(pinigine)
//    7 

while(pinigine.length<30){
    pinigine.push(rand(0,10))
}
console.table(pinigine);

// 8 
let metaliniuPinigine = [];
let popieriniuPinigine=[];

