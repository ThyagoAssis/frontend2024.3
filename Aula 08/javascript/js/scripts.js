//Imprirmir uma mensagem no console
console.log("Ola Mundo!");

//Imprimir uma mensagem no HTML
/* document.write("Agora sim!!"); */

//Imprimir mensagem em um popup
/* alert("Isso é um popup"); */

//Capturando dados do formulario
document.getElementById("loginForm").addEventListener('submit',function(event){
    event.preventDefault();

    /**Cria as variaveis */
    var usuario = document.getElementById("user").value;
    var senha = document.getElementById("password").value;

    //Exibe o conteudo da variavel
    console.log("Usuario: " + usuario + " / " + "Senha: " + senha);
})











