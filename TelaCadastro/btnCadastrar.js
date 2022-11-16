function btnCadastrar() {
    var nomeCompleto = nomeCompleto.document.getElementById("nomeCompleto");
    var emailCadastro = emailCadastro.document.getElementById("emailCadastro");
    var cadastroSenha = cadastroSenha.document.getElementById("cadastroSenha");
    var repitaSenha = repitaSenha.document.getElementById("repitaSenha");


    if (nomeCompleto == " " || emailCadastro == " " || cadastroSenha == " " || repitaSenha == " ") {
        alert("Preencha todos os campos para cadastrar.");
        console.log("Eu sou um erro");
    }

}
