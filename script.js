// 1
const nome = "Luccas"
const idade = 19
const cidade = "SBC"
const profissao = "Estudante"

console.log(`Meu nome é ${nome}. Tenho ${idade} anos. Sou de ${cidade}. Atualmente sou ${profissao}`)

// 2
let a = 1;
let b = 2;

console.log(`soma: ${a + b}`);
console.log(`subtração: ${a - b}`);
console.log(`multiplicação: ${a * b}`);
console.log(`divisão: ${a / b}`);

// 3
const anos = 19;
console.log(`você já viveu ${anos * 12}, aproximadamente`)

// 4
const n1 = 7.5
const n2 = 9
const n3 = 8
console.log(`média: ${(n1 + n2 + n3) / 3}`)

// 5
const idade1 = 19
if (idade1 >= 18) console.log("Você é maior de idade");
else console.log("Você não é maior de idade");

// 6
const num = 1793
if (num > 0) console.log("Positivo");
else if (num < 0) console.log("Negativo");
else console.log("zero")

// 7
const numero = 2398
if (numero % 2 == 0) console.log("Par")
else console.log("Impar")

// 8
let media1 = (n1 + n2 + n3) / 3
if (media1 > 7) console.log("Aprovado");
else if (media1 > 5) console.log("Recuperação");
else console.log("Reprovado");

// 9
const maior = 9, menor = 0; if (maior > menor) console.log(`${maior} é maior`); else if (menor > maior) console.log(`${menor} é maior`); else console.log("São iguais");

// 10
const domeio = 5; if (domeio > menor > maior) console.log(domeio); else if (domeio > maior > menor) console.log(domenor);

// 11
let preco = 1934
if (preco >= 100) preco = preco * 0.9
console.log(`preco final: R$ ${preco}`)

// 12
const idade2 = 19
if (idade1 >= 18) console.log("Você pode acessar");
else console.log("Você não pode acessar");

// 13
const nomes = ["luccas", "brunin", "brunão", "bigode", "marcaum"]
nomes.forEach((nome) => {
    console.log(nome)
})

// 14
const compras = ["pão", "requeijão", "milho verde", "arroz", "feijão"]
console.log(`sua lista tem ${compras.length} itens`)
compras.forEach((item, pos) => {
    console.log(`${pos + 1}     ${item}`)
})

// 15
let pessoa = {
    nome: "Brunin",
    idade: 18,
    cidade: "São Caetano do Sul",
    profissao: "Competidor"
}
console.log(`nome: ${pessoa.nome}   idade: ${pessoa.idade}  cidade: ${pessoa.cidade}    profissão: ${pessoa.profissao}`)

// 16
let produto = {
    nome: "PsVita",
    preco: 1000,
    categoria: "VideoGame Portatil",
    disponibilidade: false
}
console.log(`Produto\nNome: ${produto.nome}\nPreco: R$ ${preco}\nCategoria: ${produto.categoria}\nDisponibilidade: ${produto.disponibilidade}`)

// 17
let alunos = [
    { nome: "Brunin", idade: 18 }, { nome: "Luccas", idade: 19 }, { nome: "Bigode", idade: 20 }
]
alunos.forEach((aluno, pos) => {
    console.log(`${pos + 1}     ${aluno.nome}   ${aluno.idade}`)
})

// 18
function dobro(a) { return a * 2 };

console.log(dobro(2))
console.log(dobro(9))
console.log(dobro(-2314793))

// 19
function soma(a, b) { return a + b }
console.log(soma(4, 235))
console.log(soma(123, 987))
console.log(soma(129, 5))

// 20
function media(a, b) { return (a + b) / 2 }
console.log(media(1273, 8126))
console.log(media(1983, 765))
console.log(media(1263, 78654))

// 21
const nomelegal = "samuel"
console.log(`Olá personalizado: ${nomelegal}`)

// 22
const numerodatabuada = 9
for (let i = 1; i <= 10; i++) console.log(`${numerodatabuada} * ${i} = ${numerodatabuada * i}`);

// 23
for (let i = 1; i <= 20; i++) console.log(i);

// 24
for (let i = 10; i >= 0; i--) console.log(i);
console.log("Fim!")

// 25 
for (let i = 0; i <= 50; i += 2) console.log(i);

// 26
const numeros = [124, 124, 5, 234, 982634]
console.log(numeros.reduce((acumulador, atual) => acumulador + atual, 0))

// 27
console.log(numeros.reduce((acumulador, atual) => acumulador + atual, 0) / numeros.length)

// 28
if (produto.disponibilidade) console.log("o produto está disponível");
else console.log("o produto não está disponível")

// 29
const alunobom = {
    nome: "Eric",
    nota1: 10,
    nota2: 10
}
if ((alunobom.nota1 + alunobom.nota2) / 2 >= 7) console.log(`${alunobom.nome} está aprovado. Média: ${(alunobom.nota1 + alunobom.nota2) / 2}`);
else console.log(`O aluno: ${alunobom.nome} foi reprovado`);

// 30
const alunosbons = [
    {
        nome: "Eric",
        nota1: 10,
        nota2: 10
    },
    {
        nome: "Caio",
        nota1: 9,
        nota2: 8,
    },
    {
        nome: "Jogador",
        nota1: 9,
        nota2: 6,
    }
]

alunosbons.forEach((alunobom) => {
    console.log(`nome: ${alunobom.nome}\nnota1: ${alunobom.nota1}\nnota2: ${alunobom.nota2}`)
    const mediaalunobom = (alunobom.nota1 + alunobom.nota2) / 2
    if (mediaalunobom >= 7) console.log(`situação: aprovado.`);
    else if (mediaalunobom >= 5) console.log ("situação: recuperação")
    else console.log(`situação: reprovado`);
})