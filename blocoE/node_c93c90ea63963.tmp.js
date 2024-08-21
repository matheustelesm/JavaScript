


const readline = require('readline');

// Cria uma interface para capturar a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário e captura a entrada
rl.question('Por favor, insira seu nome: ', (nome) => {
    console.log(`Olá, ${nome}!`);

    // Fecha a interface após a captura
    rl.close();
});
