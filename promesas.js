var promesa = new Promise((resolver,rechazar)=> {
    console.log('inicia la promesa')
    5>10? resolver() : rechazar() //mover la comparacion para probar
    
    
})

promesa.then(()=>{
    //throw new Error('Algo fallo')
    console.log('hace otra cosa...')
})
.catch(()=>{
    console.log('hacer esto en caso de que falle')
})
.then(()=>{
    console.log('hacer esto sin imnportar lo que sucedio antes')
})

console.log('fin')
console.log('fin1')
console.log('fin2')
console.log('fin3')