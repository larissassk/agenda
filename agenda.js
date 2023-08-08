

var dadosLista = [];
var data = [];

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;
    let data = document.getElementById("data").value;
    

    if(nomeUser){
        dadosLista.push(nomeUser);
        data.push(nomeUser);

        criarLista();
        document.getElementById('nomeUser').value = '';
        document.getElementById('').value = '';

    }
}

//função para criar linhas de usuario

 

function criarLista(){

    let tabela = document.getElementById('tabela').innerHTML =  '<tr><th>Tarefas: </th><th>Data</th><th>✔ X</th></tr>';

 

    for(let i = 0;i <= (dadosLista.length - 1);i++){

        tabela += "<tr><td>" + dadosLista[i] + "</td><td>"+ data[i] +"</td><td><button class ='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>editar</button><button class ='btn btn-danger'onclick='excluir(this.parentNode.parentNode.rowIndex)'>Concluido</button></td></tr>";

        document.getElementById('tabela').innerHTML = tabela;

    }

}

 

// função editar nome

 

function editar(i){

    document.getElementById('nomeUser').value = dadosLista[(i - 1)];

    dadosLista.splice(dadosLista[(i-1)], 1);

}

 

// função excluir nome

 

function excluir(i){

    dadosLista.splice((i-1),1);
    document.getElementById('tabela').deleteRow(i);

}