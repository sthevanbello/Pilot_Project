// Ajax

let botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {

            let resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(element => {
                AdicionaNaTabela(element);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            let erroConexao = document.querySelector("#erro-conexao");
            erroConexao.textContent = "Erro de conexão. Não foi possível recuperar os dados dos pacientes!"
        }
    });
    xhr.send();
});

// https://api-pacientes.herokuapp.com/pacientes