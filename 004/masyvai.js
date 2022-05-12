function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// https://docs.google.com/document/d/1q1E8LNDrBtMSOsUQxFRW6swYC5dgKn1sq29XnapnJ9c/edit


const pinigine = [];
let piniginesDydis = rand(10, 30);
let Suma = 0;
let kupiuros = 0;
let isleistosMonetos = 0;
let didzPinigas = 0;
let didzPCount = 0;

for (let i = 0; i < piniginesDydis; i++) {
    let pinigai = rand(0, 10);
    pinigine.push(pinigai);
    Suma += pinigai;
    if (pinigai > 2) {
        kupiuros += pinigai;
    } else {
        isleistosMonetos += pinigai
    }
    if (didzPinigas < pinigai) {
        didzPinigas = pinigai;
    }
}




console.table(pinigine)
console.log('pinigu suma ', Suma);
console.log("kupiuru suma ", kupiuros);
console.log("pinigu liko kai isleistos monetos ", Suma - isleistosMonetos);


for (let i = 0; i < piniginesDydis; i++) {
    if (didzPinigas == pinigine[i]) {
        didzPCount++;
    }
    if (pinigine[i] == 0) {
        pinigine[i] = i;
    }
}

console.log("didziausias $ ", didzPinigas, "ju kiekis", didzPCount);
console.table(pinigine)
//    7 

while (pinigine.length < 30) {
    pinigine.push(rand(0, 10))
}
console.table(pinigine);

// 8 
let metaliniuPinigine = [];
let popieriniuPinigine = [];
let a = 0; let b = 0;
for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2) {
        metaliniuPinigine[a] = pinigine[i];
        a++
    } else {
        popieriniuPinigine[b] = pinigine[i];
        b++
    }
}

console.table(metaliniuPinigine)
console.table(popieriniuPinigine)

//9
let naujaPinigine = [metaliniuPinigine, popieriniuPinigine]
console.table(naujaPinigine)
//10
let kortSkyrius = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']
naujaPinigine.push(kortSkyrius)
console.table(naujaPinigine)
//11
kortSkyrius.sort();
console.table(naujaPinigine);
//12
let masterCkiekis=0;
let visaKiekis=0;
for (let i = 0; kortSkyrius.length < 20; i++) {
    if (rand(1, 2) > 1) {
        kortSkyrius.push('MasterCard')
        masterCkiekis++;
    } else {
        kortSkyrius.push('Visa')
        visaKiekis++;
    }
}
console.table(kortSkyrius)
//13
if(masterCkiekis>visaKiekis){
    console.log(`MasterCard daugiau ju kiekis ${masterCkiekis} negu Visa ${visaKiekis}`)
}else if(masterCkiekis===visaKiekis){
    console.log("korteliu skaicius vienodas ")
}else{
    console.log(`MasterCard Maziau ju kiekis ${masterCkiekis} negu Visa ${visaKiekis}`)
}
//14
let bilietuSkyrius=[];
for(let i=0; i<10;i++){
    bilietuSkyrius.push(rand(1000000000,9999999999))
}
naujaPinigine.push(bilietuSkyrius)
console.table(naujaPinigine)

//15
bilietuSkyrius.sort();
console.table(naujaPinigine);
// //16
let idetaPinigu=0;let idetaPiniguisviso=0;
while(idetaPiniguisviso<500){
    idetaPinigu=rand(3,10);
    idetaPiniguisviso+=idetaPinigu;
    popieriniuPinigine.push(idetaPinigu);
}
console.table(popieriniuPinigine);

naujaPinigine.push(popieriniuPinigine);
console.table(naujaPinigine);
// nepavyko atspauzdinti visos pinigines

//17
let laimingiBilietai=0;
for (let i=0;i<bilietuSkyrius.length;i++){
    if(bilietuSkyrius[i]%777==0){
        laimingiBilietai++;
    }
}
console.log(laimingiBilietai)
//18
let nuotraukos= ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];
nuotraukos = nuotraukos.sort((a,b) => a.length - b.length);
console.log(nuotraukos);
naujaPinigine.push(nuotraukos);
console.table(naujaPinigine);
