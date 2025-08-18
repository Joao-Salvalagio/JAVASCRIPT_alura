//Exibe uma mensagem de boas-vindas ao usuário
alert('Boas vindas ao jogo do número secreto!');
//Número secreto que o usuário deve adivinhar
let numeroSecreto = 29;
//Solicita ao usuário que digite um número entre 1 e 30
let tentativa = prompt('Digite um número entre 1 e 30:');

//SE
//SUCESSO: se a tentativa for igual ao número secreto, exibe uma mensagem de sucesso
if (tentativa == numeroSecreto) {
    //Exibe uma mensagem de sucesso se o usuário acertar o número secreto
    alert('Parabéns, você acertou!');
}
//SENÃO
//ERRO: se a tentativa nao for igual ao número secreto, exibe uma mensagem de erro
else{
    //Exibe uma mensagem de erro informando o número secreto se o usuário errar
    alert('Que pena, você errou! O número secreto era ' + numeroSecreto + '.');
    //alert(`Que pena, você errou! O número secreto era ${numeroSecreto}.`); também é válido
    //alert("Que pena, você errou! O número secreto era " + numeroSecreto + "."); também é válido
}