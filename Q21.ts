interface item{
    name:string
    price:number
}
// First Object
const dress: item ={
    name: 'Shirt',
    price: 1000
}
const fruit: item={
    name: 'apple',
    price: 70
}
console.log(`dress style: ${dress.name}, price: ${dress.price}`);
console.log(`fruit name: ${fruit.name}, price: ${fruit.price}`);