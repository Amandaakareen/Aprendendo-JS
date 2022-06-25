


function tiposdenota (nota){
    let notaA = nota >= 90 && nota <= 100
let notaB =  nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaE = nota < 60 && nota >= 0

if (notaA){
    console.log("A")
}else if (notaB)
{
    console.log("B")
} else if (notaC)
{
    console.log("C")
} else if (notaD)
{
    console.log("D")
} else if(notaE)
{
    console.log("Nota:E")
} else {
    console.log("nota invalida")
}
 return
}

tiposdenota(10)
tiposdenota(60)
tiposdenota(-1)
tiposdenota(90)
tiposdenota(101)
tiposdenota(112)
tiposdenota(-1)
tiposdenota(-5)
tiposdenota(66)
tiposdenota(55) 
 
let receitas = []
let despesas = []

class Despesa {
     constructor(nome, valor){
            this.nome = nome
            this.valor = valor
    }}
class receita {
    constructor(nome, valor){
     this.nome = nome
     this.valor = valor
       }}
 function calculadordespesas(){
    let valortotaldespesas = 0
    for (const despesa of despesas) {
    valortotaldespesas = valortotaldespesas + despesa.valor
    } return valortotaldespesas
    }
    

function calculadorreceitas(){
    let valortotalreceitas = 0
    for(const receita of receitas){
     valortotalreceitas = valortotalreceitas + receita.valor }
    return valortotalreceitas
    }

const bolo = new Despesa('Bolo', 200)
const sorvete = new Despesa('Sorvete', 250)
const pao = new Despesa ('pao', 205)
const leite = new Despesa ('leite', 50)

despesas.push(bolo)
despesas.push(sorvete)
despesas.push(pao)
despesas.push(leite)
 
 const decimo = new receita ("decimo", 250 )
 const salario = new receita ("salario", 250)

receitas.push(decimo)
receitas.push(salario)

 function saldo (){
    let saldofamilia = calculadorreceitas() - calculadordespesas()
    if(saldofamilia <= 0)
    {console.log("Saldo negado:" + saldofamilia)}
    else { 
        console.log("Saldo aprovado:" + saldofamilia)
    }}


    saldo()

const a = 25
const b = 30
const c = 50
console.log((a+b)/2)
console.log((a+c) / 2) 
console.log((a+b+c) / 3) 
       

let f = 250
let d = 0

d = ((f - 32)*5)

console.log(c)

function tabuada (valorx){
const t =[0,1,2,3,4,5,6,7,9,10]
for(const x of t){
console.log (`resultado: ${valorx} x ${x} = ${valorx * x}`)}   
}
tabuada(10)

const usu = [
    {
        nome: "Amanda",
        senha: "brian0103"
    },
    {
        nome: "Rudolfo",
        senha: "Amandalinda"
    }
]

function versenha(nome, senha ){
    for(const pro of usu){
        if(pro.nome === nome && pro.senha === senha) {
            console.log("entrando..")
            return
        }
    }

    console.log('Tente novamente')

}

versenha('Amanda', '1234') //senha incorreta
versenha('Rudolfo', 'Amandalinda') // usuário lagado

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
function calcularlivros (){
     let quantidadeca = 0
     let quantidadeli = 0
     let quantidadeauthor = 0
     for(const per of booksByCategory)
    {   quantidadeca = quantidadeca + 1
        for(const livros of per.books){
            quantidadeli = quantidadeli + 1
            quantidadeauthor = quantidadeauthor + 1
            if(livros.author === "Augusto Cury" ){
                 console.log(` author:${livros.author}   title: ${livros.title}`)   
            }
        }
    }
    console.log(`Quantidade de category é ${quantidadeca} e de livros dentro é ${quantidadeli} `)
    console.log(`Quantidade de author é ${quantidadeauthor}`)
    return
}
function transformar(author)
{
    for(const tras of booksByCategory){
        for(const trass of tras.books){
            if(author === trass.author){
                console.log(trass.title)
            }
        }
    }
    return
}
transformar( "Augusto Cury")
transformar("T. Harv Eker")

calcularlivros()





























