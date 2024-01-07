console.log("Olá viajante, qual seu nome?");
let nickname = "Felipe o Valente";
console.log("Seja bem-vindo, " + nickname);

// Inicializando pontos de vida fora do loop
let pontosVida = 1200;

  // Simulando ganho de pontos de experiência
  pontosVida += 1000;

  switch (true) {
    case pontosVida === 1000:
      console.log("Uhuul, chegou a força de um ferro com " + pontosVida + " XP");
      break;
    case pontosVida >= 1001 && pontosVida <= 2000:
      console.log("Uhuul, chegou a força de bronze com " + pontosVida + " XP");
      break;
    case pontosVida >= 2001 && pontosVida <= 5000:
      console.log("Uhuul, chegou a força de prata com " + pontosVida + " XP");
      break;
    default:
      console.log("Vamos lá campeão, você consegue com " + pontosVida + " XP!");
  }

  // Adicionando estrutura de decisão para verificar se o personagem tem um item especial
  let temItemEspecial = true;

  if (temItemEspecial) {
    console.log("Parabéns! Você possui um item especial. Use com sabedoria!");
  } else {
    console.log("Continue explorando para encontrar itens especiais!");
  }
// Saudação final personalizada
console.log("Parabéns, " + nickname + "! Você concluiu sua jornada com " + pontosVida + " pontos de vida. Até a próxima aventura!");
