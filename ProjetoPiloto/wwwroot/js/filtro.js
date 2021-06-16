var campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    
    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let nomeTd = paciente.querySelector(".info-nome");
            var nome = nomeTd.textContent;
            var expressao = new RegExp(this.value, "i");

            if ( !(expressao.test(nome))) {
                
                paciente.classList.add("invisivel");
            }else{
                
                paciente.classList.remove("invisivel")
            }
            
        }
    }else{
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        });
    }

    
});
