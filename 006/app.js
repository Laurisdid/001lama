function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const b='batas'
  function fun(ki,li){
      const rez = ki+li
      const rez2=ki *li
      return [rez,rez2];
      console.log(ki);
  }


 const [gavau1,gavau2]= fun(5,2);
  fun(6,3);
  fun(5),3;
  fun('10',12)
  fun(3,3);
  console.log(gavau1,gavau2)

  const suVardo=function(){
    console.log('as turiu vardo');
}

  const beVardo=function(){
      console.log('as neturiu vardo');
      
  }
 
const strele= ()=>{
    console.log('streline funkija')
}


const vienas= y=>{
    console.log('streline funkcija kada turi tik 1 perduodama argumenta galima rasyt be sklaustu');
}

const du=y => console.log('streline funkcija');

  beVardo();
  suVardo();
du();
vienas();
console.log(du());
console.log(vienas());





// const fancy =()=>{
// return kita=()=>{
//     console.log('labas')
// }
// }

const fancy = ()=>()=> console.log('labas');
fancy()();

function alio(element){
    console.log(element);
}

const array = ['a','b','c'];
//array.forEach((element,i) => console.log(element,i));
    
const dv =[
    [2,3,0,8,0],
    [7,3,8,5,6],
    [9,3,9,8,0],
    [1,7,8,8,9]
]
// dv.forEach(r=>navigator.forEach(n=>console.log(n)));



const cat={
    name:'pilkis',
    voice: function(){console.log('meu '+ this.name)}
}
cat.voice();

//savybes kurios yra funkijos tai metodai


const n = ["Petras", "Asilas", "Barsukas", "Kate"];


n.sort((a,b)=>{
if(a>b){
    return 1;
}
if(a<b){
    return -1;
}
return 0;
});


console.log(n)


