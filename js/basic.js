var userName='Amigos da galaxia!'

document.getElementById('user-name').innerHTML =  userName

//Variavéis
/*var nome ='Mestre Yoda'
var idade = 100
var jedi = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi)*/

//Operadores matematicos//

/*var n1 = 5
var n2 = 5

var total = n1 + n2
console.log(total)

var n3 =6
var n4 ='6'

var soma= n3 + parseInt(n4)
console.log(soma)

var n5=7
var n6=7.2

console.log(typeof n6)
var resultado = n5 + n6
console.log(resultado)

//Operadores de comparação//

var a1 =5
var a2 ='5'

var result = a1 === a2
console.log(result)*/

//Funçao//

/*function boasvindas(nome){
   alert(nome + ', Seja Bem-Vindo(a)')
}
boasvindas('Pedro')

function soma(n1, n2){
    return n1 + n2
}
var resultado = soma(6,6)
console.log(resultado)*/
//---------------------------------------------*------------------------------------------

//Controle de fluxo//

//Sebdo  um cliente conrrentista do banco 
//Posso sacar dinheiro em caixas eletrônicos
//Para poder compra em lugares que não aceitam cartões de credito ou debito

/*var saldo = 1000

function saque(valor){
    if(valor > saldo){
        console.log('Valor do saque superior ao saldo!')
    } else if(valor > 700){
        console.log('Valor do saque é superior que o permitido por operação!')
    } else {
        saldo = saldo - valor
    }
}
saque(701)
console.log(saldo)*/

//Cenario 1: Saque com sucesso
//Dado que meu saldo é de 100 reais
//Quando faço  um saque de 500 reais
//Então o valor do saque deve ser deduzir do meu saldo

//Cenario 2: Saque com valor superior ao saldo
//Dado que meu saldo é de 1000 reais
//Quando faço um saque de 1001 reais
//Então não deve deduzir do meu saldo
//E deve  mostrar uma mensagem de alerta informando que o valor é superior ao saldo

//Cenario 3: Saque com valor máximo
//Dado que meu saldo e de 1000
//E o valor máximo por operação é de 700
//Quando faço um saque no valo de 701 reais
//Então não deve deduzir do meu saldo
//E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação


//Arrays

//var gaveteiro = ['meias', 'gravatas', 'cuecas', 'documentos']

//console.log(gaveteiro[2])

//var personagens = ['Mestre Yoda','Luke Skywalker', 'Princesa Leia', 'Darth Vader']
//personagens.push('C3pO') //adiciona mais um item ao arrays
//console.log(personagens)
//personagens.pop() exclui o ultimo item


//controles de repetição ou laço de repetição

//var gaveteiro = ['meias', 'gravatas', 'cuecas', 'documentos']

//personagens.forEach(function(p){
    /*console.log(p)
})*/

/*for( var i =0; i <= 10; i++){
    console.log(i)
}*/

//Objetos

var Yoda = {
    nome: 'Mestre Yoda',
    idade: 100,
    jide: true,
    mostraIdade: function(){
        console.log(`A idade do ${this.nome} é de ${this.idade} anos.`)
    }
}

console.log(Yoda)
Yoda.mostraIdade()

