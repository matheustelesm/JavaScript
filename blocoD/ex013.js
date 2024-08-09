var agora = new Date() // sempre maiúsculo o Date
var diaSem = agora.getDay()
/* 

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado 

*/

// if (diaSem == 0) {
//     console.log('Hoje é DOMINGO!')
// } else if(diaSem == 1) {
//     console.log('Hoje é SEGUNDA-FEIRA')
// } else if(diaSem == 2) {
//     console.log('Hoje é TERÇA-FEIRA')
// } else if(diaSem == 3) {
//     console.log('Hoje é QUARTA-FEIRA')
// } else if(diaSem == 4) {
//     console.log('Hoje é QUINTA-FEIRA')
// } else if(diaSem == 5) {
//     console.log('Hoje é SEXTA-FEIRA')
// } else if(diaSem == 6) {
//     console.log('Hoje é SÁBADO')
// } else{
//     console.log('Dia inválido!!')
// }

switch(diaSem) {

    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break

    case 4:
        console.log('Quinta-Feira')
        break

    case 5:
        console.log('Sexta-Feira')
        break

    case 6 :
        console.log('Sábado')
        break

    default:
        console.log('[ERRO] Dia inválido!')
        break
}

// break é importante estar ali 
// switch estrutura um pouco mais limitada, utilidade em situações pontuais

