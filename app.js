//Exibe uma mensagem de boas-vindas ao usuário
alert('Boas vindas ao jogo do número secreto!');
//Número secreto que o usuário deve adivinhar
let numeroSecreto = parseInt(Math.random() * 100 + 1);
//Solicita ao usuário que digite um número entre 1 e 30
let tentativa = -1;
//Numero de tentativas
let tentativas = 1;

//ENQUANTO
while(tentativa != numeroSecreto){
    tentativa = prompt('Digite um número entre 1 e 100:');
    //SE
    if (tentativa == numeroSecreto) {
        break;
        //Exibe uma mensagem de sucesso se o usuário acertar o número secreto
        //alert('Parabéns, você acertou! Número de tentativas: ' + tentativas);
    }
    //SENÃO
    else{
        if (numeroSecreto > tentativa) {
            alert('O número secreto é maior que ' + tentativa + '. Tente novamente!');
            //ex: alert(`Que pena, você errou! O número secreto era ${numeroSecreto}.`); também é válido
        }else{
            alert('O número secreto é menor que ' + tentativa + '. Tente novamente!');
        }
        tentativas++; //acrescenta +1 nas tentativas
    }
}

let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
alert(`O número secreto era ${numeroSecreto}. Você acertou em ${tentativas} ${palavraTentativa}!`);