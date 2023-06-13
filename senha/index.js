function verificarSenha() {

    var retorno = false;
    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/; 
    var numeros = /[0-9]/;

    var senha = prompt('Digite a sua senha com no mínimo: 8 caracteres, 1 letra maiúscula, 1 minúscula e 1 número')

    if(senha.length >= 8){
        alert('Senha registrada! Vou conferir ela agora!');
       } else {
        alert('Xiiii, a senha tem menos que 8 caracteres, mude a sua senha e lembre que o mínimo são 8 caracteres.');
        return verificarSenha();
       }

       var auxMaiuscula = 0;
       var auxMinuscula = 0;
       var auxNumero = 0;

       for(var i=0; i<senha.length; i++){
        if(letrasMaiusculas.test(senha[i]))
        auxMaiuscula++;
        else if(letrasMinusculas.test(senha[i]))
        auxMinuscula++;
        else (numeros.test(senha[i]))
        auxNumero++;
        }
        if (auxNumero > 0){
        if (auxMaiuscula > 0){
        if (auxMinuscula > 0){
        retorno = true;
        }
        }
        }
        if (retorno===true){
            return alert('Tudo certinho!');
        }else{
            return alert('Xiii, deu erro!')
        }

}