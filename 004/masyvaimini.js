function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

let masyvas = [];
for (let i = 0; i < 30; i++) {
    masyvas.push(rand(5, 25))
}
console.table(masyvas)

// // 2Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let bigNumbers = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        bigNumbers++;
    }
}
console.log(bigNumbers);


// Raskite didžiausią masyvo reikšmę ir jos indeksą;
console.log(Math.max.apply(0, masyvas));
console.log(masyvas.indexOf(Math.max.apply(0, masyvas)))
// Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
let lygSuma = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (i % 2 === 0) {
        lygSuma += masyvas[i];
    }
}
console.log(lygSuma);


// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
let mazintasMasyvas = [];
for (let i = 0; i < masyvas.length; i++) {
    mazintasMasyvas.push(masyvas[i] - i)
}
console.log(mazintasMasyvas)

// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
while (masyvas.length < 40) {
    masyvas.push(rand(5, 25))
}
console.table(masyvas)
// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių,
// o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
let lyginisMasyvas = [];
let nelygisnisMasyvas = [];
for (let i = 0; i < masyvas.length; i++) {
    if (i % 2 === 0) {
        lyginisMasyvas.push(masyvas[i])
    } else {
        nelygisnisMasyvas.push(masyvas[i])
    }
}
console.table(lyginisMasyvas)
console.table(nelygisnisMasyvas)
// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
let klonas = [...masyvas]
for (let i = 0; i < klonas.length; i++) {
    if (i % 2 === 0) {
        if (klonas[i] > 15) {
            klonas[i] = 0;
        }
    }
}
console.table(klonas)
// Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        console.log(masyvas[i], i)
        break;
    }
}
//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
let raidziuMas = [];
for (let i = 0; i < 200; i++) {
    let randomsk = rand(1, 4)
    if (randomsk === 1) {
        raidziuMas.push('A')
    } else if (randomsk === 2) {
        raidziuMas.push('B')
    } else if (randomsk === 3) {
        raidziuMas.push('C')
    } else if (randomsk === 4) {
        raidziuMas.push('D')
    }
}
console.table(raidziuMas)
// Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes.
//Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
let raidziuMas2 = []; let raidziuMas3 = [];
for (let i = 0; i < 200; i++) {
    let randomsk = rand(1, 4)
    if (randomsk === 1) {
        raidziuMas2.push('A')
    } else if (randomsk === 2) {
        raidziuMas2.push('B')
    } else if (randomsk === 3) {
        raidziuMas2.push('C')
    } else if (randomsk === 4) {
        raidziuMas2.push('D')
    }
}
for (let i = 0; i < 200; i++) {
    let randomsk = rand(1, 4)
    if (randomsk === 1) {
        raidziuMas3.push('A')
    } else if (randomsk === 2) {
        raidziuMas3.push('B')
    } else if (randomsk === 3) {
        raidziuMas3.push('C')
    } else if (randomsk === 4) {
        raidziuMas3.push('D')
    }
}
console.table(raidziuMas2)
console.table(raidziuMas3)
let unikaliuReiksm = 0;
let pasikartReiksm = 0;
for (let i = 0; i < raidziuMas.length; i++) {
    if (raidziuMas[i] === raidziuMas2[i] || raidziuMas2[i] === raidziuMas3[i] || raidziuMas[i] === raidziuMas3[i]) {
        pasikartReiksm++;
    } else {
        unikaliuReiksm++;
    }
}
console.log('pasikartojancios :', pasikartReiksm, 'unikalios ', unikaliuReiksm)
//5 Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100.
// Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
let masyvas5a = []; let masyvas5b = [];
for (let i = 0; i < 100; i++) {
    masyvas5a.push(rand(100, 999));
    masyvas5b.push(rand(100, 999));
}

let uniqueArray = [...new Set(masyvas5a)];
while (uniqueArray.length < 100) {
    uniqueArray.push(rand(100, 999))
    uniqueArray = [...new Set(uniqueArray)];
}
let uniqueArray2 = [...new Set(masyvas5b)];
while (uniqueArray.length < 100) {
    uniqueArray2.push(rand(100, 999))
    uniqueArray2 = [...new Set(uniqueArray2)];
}
console.log('uniqueArray2')
console.log(uniqueArray2)
console.log(uniqueArray)



//6 Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
const numberRemove = new Set(masyvas5b)
const newArray6 = masyvas5a.filter((Number) => {
    return !numberRemove.has(Number);
});
console.log('---------6----');
console.log(newArray6)

//7 Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
const array7 = [];
let result;
    for (let i = 0; i < uniqueArray.length; i++) {
        for (let j = 0; j < uniqueArray2.length; j++) {
            if (uniqueArray[i] === uniqueArray2[j]) {
                array7.push(uniqueArray[i])
                result = true;
                break;
            }
        }
        if (result) {
            break;
        }
    }

console.log(array7)

//8 Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės
//, o jo reikšmės iš būtų antrojo masyvo.
let masyvas8=[];
let a;
let indexkeitiklis =function(index,skaiius){
    a=index;
    index=skaiius;
    skaiius=a
}

//Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
let ma = [rand(5, 25), rand(5, 25)]
for (let i = 2; i < 10; i++) {
    ma.push(ma[i - 1] + ma[i - 2]);
}
console.log(ma);