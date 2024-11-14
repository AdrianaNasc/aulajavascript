console.log("Olá, Mundo!");

// Tipos de Variaveis

// Não utilizamos mais a variável do tipo (var)

let nome = "adriana" //Utilizando aspas é string

nome = "Adriana" // tipo string (texto)
console.log(nome)

const cpf = 88888888888 //Utilizando sem as aspas é number
console.log(cpf)

let diaLindo = true
console.log(typeof diaLindo) //boolean (true ou false)

let data;
data = "olá"
console.log (data)

console.log(5 * "y") //NaN

let aluno; // <--- caixa vazia (undefined)
console.log(aluno)

let noite = null // <--- caixa anulada

// console.log(número !== number)
let number = 3
let numero = 3
console.log(2 <= 3) // 2 é menor que 3 

let idade = 26
if(idade > 18){
    console.log("Você é maior de idade")
}else if(idade == 15){
    console.log("está na idade certa")
}
else{
    console.log("Você é menor de idade")
}

let temLuz = true
let sim = "acenda as luzes"
let nao = "aguarde a energia voltar"
if(temLuz){}





let num = prompt("Digite um número!")
if(num == 5){
    alert("Você foi premiado!")
}else{
    alert("Você errou!")
}