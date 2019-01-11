var frutas = ['Manzana', 'Banana'];

frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
}); //2, 10, 20, 30

var filtered =  numbers.filter(number => number>=10);
console.log(filtered)

console.log(numbers.every(number => number>10))



