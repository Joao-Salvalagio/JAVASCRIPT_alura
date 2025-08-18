alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 29;
let tentativa = prompt('Digite um número entre 1 e 30:');

if (tentativa == numeroSecreto) {
    console.log('Parabéns, você acertou!');
}else{
    console.log('Que pena, você errou! O número secreto era ' + numeroSecreto + '.');
}