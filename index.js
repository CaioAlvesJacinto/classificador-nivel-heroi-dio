let nomeHeroi = "Oatk";
let qtdXP = 6000;
let nivelHeroi = "";

switch (true) {
    case (qtdXP > 1000 && qtdXP <= 2000):
        nivelHeroi = "Bronze";
        break;
    case (qtdXP > 2000 && qtdXP <= 5000):
        nivelHeroi = "Prata";
        break;
    case (qtdXP > 5000 && qtdXP <= 7000):
        nivelHeroi = "Ouro";
        break;
    case (qtdXP > 7000 && qtdXP <= 8000):
        nivelHeroi = "Platina";
        break;
    case (qtdXP > 8000 && qtdXP <= 9000):
        nivelHeroi = "Ascendente";
        break;
    case (qtdXP > 9000 && qtdXP <= 10000):
        nivelHeroi = "Imortal";
        break;
    case (qtdXP >= 10001):
        nivelHeroi = "Radiante";
        break;
    default:
        nivelHeroi = "Ferro";
}

console.log("O Heroi de nome " + nomeHeroi + ", está no nível " + nivelHeroi);