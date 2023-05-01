const nome = "Ismael oliveira";
let nome2 = "";
let pessoaDefault = {
    nome: "Ismael Oliveira",
    idade: "37",
    trabalho: "programador"
}

let nomes = ["Ismael Oliveira", "Thilie Reis", "Sophie Carvalho"];
let pessoas = [
    {
        nome: "Ismael Oliveira",
    idade: "37",
    trabalho: "programador"
    },
    {
        nome: "Thilie Reis",
    idade: "28",
    trabalho: "quimica"
    }
];

function alterarnome() {
    nome2 = "Sophie Carvalho";
    console.log("Valor Alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor Alterado recebendo um nome:");
    console.log(nome2);
}


function adicionarPessoas(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("---------Imprimir Pessoas----------");
    pessoas.forEach((item) => {
       console.log("Nome:");
       console.log(item.nome);

       console.log("Idade:");
       console.log(item.idade);

       console.log("Trabalho:");
       console.log(item.trabalho);
       })
}

imprimirPessoas();

adicionarPessoas({
    nome: "Ricardo",
    idade: "28",
    trabalho: "cantor"

});

imprimirPessoas();





//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
 //   nome: "Thilie Reis",
  //  idade: "28",
   // trabalho: "quimica"
//})



//recebeEalteraNome("Jorge Carvalho");
//recebeEalteraNome("Thilie Reis");
//alterarnome();
