const somar = require("./funcoes/somar")
const multiplicar = require('./funcoes/multiplicar')
const dividir = require('./funcoes/subtrair')
const subtrair = require('./funcoes/subtrair')

let resultadoSoma = somar(5,8)
console.log (resultadoSoma)

let resultadoMultiplicar = multiplicar(5,5)
console.log(resultadoMultiplicar)
    
    let resultadoDividir = dividir(10,0)
    console.log(resultadoDividir)

    let resultadoSubtrair = subtrair(30,30)
    console.log(resultadoSubtrair)
    