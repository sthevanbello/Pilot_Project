let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", adicionaPaciente);

function adicionaPaciente(event) {

    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = recuperaDadosDoForm(form);
    
    AdicionaNaTabela(paciente);

}

function AdicionaNaTabela(paciente) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    
    var form = document.querySelector("#form-adiciona");
    var tabela = document.querySelector("#tabela-pacientes");
    var pacienteTr = CriaTr();
    var pacienteTd = CriaTd(paciente);

    PreencheTr(pacienteTr, pacienteTd, form);
    preencheTBody(pacienteTr, tabela);
    
}

function CriaTr() {
    var tr = document.createElement("tr");
    tr.classList.add("paciente");
    return tr;
}

function CriaTd(dado) {

    var tdMontado = {
        nomeTd: montaTd(dado.nome, "info-nome"),
        pesoTd: montaTd(dado.peso, "info-peso"),
        alturaTd: montaTd(dado.altura, "info-altura"),
        gorduraTd: montaTd(dado.gordura, "info-gordura"),
        imcTd: montaTd(dado.imc, "info-imc"),
    }
    return tdMontado
}

function montaTd(dado, classe) {

    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);
    return td
}

function PreencheTr(dadoTr, dadoTd, form) {

    let erros = validaPaciente(dadoTd);

    if (erros.length == 0) {
        for (let i in dadoTd) {
            dadoTr.appendChild(dadoTd[i]);
        }
        form.reset();
    }else{
        exibeErros(erros)
    }
}

function validaPaciente(dadoTd) {
    let peso = dadoTd.pesoTd.textContent;
    let altura = dadoTd.alturaTd.textContent;
    let nome = dadoTd.nomeTd.textContent;
    let gordura = dadoTd.gorduraTd.textContent;
    let erros = [];
    pacienteValido = true;

    if (!validaPeso(peso, dadoTd.pesoTd)) {
        erros.push("Peso inválido");
        pacienteValido = false;
    }
    if (!validaAltura(altura, dadoTd.alturaTd)) {
        erros.push("Altura inválida");
        pacienteValido = false;
    }
    if (!validaCampo(nome)) {
        erros.push("Preencha o campo Nome");
    }
    if (!validaCampo(gordura)) {
        erros.push("Preencha o campo Gordura");
    }
    return erros;
}


function validaCampo(campo){
    if (campo == "") {
        return false
    }
    return true
}


function exibeErros(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function preencheTBody(dadoTr, tabela) {
    
    tabela.appendChild(dadoTr);
}

function recuperaDadosDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}