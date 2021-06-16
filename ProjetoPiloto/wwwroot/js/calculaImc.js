imcPaciente(".paciente")

function imcPaciente(paciente) {
    var pacientes = document.querySelectorAll(paciente);

    for (let i = 0; i < pacientes.length; i++) {
        let imcVal = true;


        let paciente = pacientes[i];

        let tdPeso = paciente.querySelector(".info-peso");
        let peso = tdPeso.textContent;

        let tdAltura = paciente.querySelector(".info-altura");
        let altura = tdAltura.textContent;

        let tdImc = paciente.querySelector(".info-imc");

        imcVal = validaPeso(peso, tdPeso, imcVal);

        imcVal = validaAltura(altura, tdAltura, imcVal);

        var imc = confereImc(imcVal, peso, altura, paciente);

        tdImc.textContent = imc;
    }
}

function confereImc(imcVal, peso, altura, paciente) {
    if (imcVal) {
        var imc = calculaImc(peso, altura);
    } else {
        paciente.classList.add("paciente-invalido");
        imc = 0;
    }
    return imc;
}

function validaAltura(altura, tdAltura, imcVal=true) {
    if (altura <= 0 || altura >= 2.50) {
        tdAltura.textContent = "Altura inválida";
        imcVal = false;
    }
    return imcVal;
}

function validaPeso(peso, tdPeso, imcVal=true) {
    if (peso <= 0 || peso >= 200) {
        tdPeso.textContent = "Peso inválido";
        imcVal = false;
    }
    return imcVal;
}

function calculaImc(peso, altura){
    let imc = peso / (altura * altura);
    
    return imc.toFixed(2)
}
