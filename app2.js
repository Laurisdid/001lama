console.log ('labas');

let skaicius = 0;
let netikrasSkaicius ="444";
let loginis=false;

console.log(typeof skaicius, typeof netikrasSkaicius)
console.log(typeof loginis)

console.log(!!skaicius);
console.log(
)
if (netikrasSkaicius){
    console.log('yes');
}else if (skaicius){
    console.log("nzn")
}else {
    console.log('no')
}
//event loop google it

if( 5== '5'){
    console.log('yes');
}else console.log('no')



let kas = 'antis';

switch(kas){
    case 'anas':
    console.log('Anas');
    break;
    case 'tas':
        console.log('tas');break;
    case 'antis':
        console.log('antis');break;
    default:    //else
        console.log('labanakt')

}