const tagh1= document.querySelector('h1');
console.log(tagh1)
const tagh1b= document.querySelector('h1 + h1');
console.log(tagh1b)

const tagall = document.querySelectorAll('h1');
console.log(tagall)

tagall.forEach(h1 =>{
h1.style.color = "pink";
h1.style.backgroundColor='black';
console.log(h1);
tagh1.innerText+=' valio';
h1.innerHTML='<i>Valio Alio</i>'
});


const buttonas = document.querySelector('button');
buttonas.addEventListener('click',()=> {
    console.log('paspausta');
    buttonas.style.color = buttonas.style.color == 'red' ? 'black': 'red';

});

tagall.forEach(h1=>{
    h1.addEventListener('click',()=>{
        h1.style.color = h1.style.color == 'red' ? 'pink': 'red';
    })


})
const href = document.querySelector('a');
href.addEventListener('click',e => {
    e.preventDefault();
    console.log('paspausta');
    e.target.style.color = href.style.color == 'red' ? 'black': 'red';

});

document.querySelector('#vaikas').addEventListener('click',e =>{
    e.stopPropagation();
    e.target.style.backgroundColor = e.target.style.backgroundColor== 'red' ? 'black': 'red';

})
document.querySelector('#tevas').addEventListener('click',e =>{
    document.querySelector('#tevas').style.backgroundColor = e.target.style.backgroundColor== 'red' ? 'black': 'red';

})