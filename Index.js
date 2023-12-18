console.log("Guerra Marciana")
console.log("O Ano é 2050 e finalmente a humanidade conseguiu criar sua primeira colônia em Marte, mas em uma escavação algo terrível aconteceu, um gás desconhecido do Homem até então saiu das fendas das rochas escavadas atravessou os trajes dos trabalhadores e os contaminou, transformando eles em criaturas horríveis e com um único sentimento, o de ódio. Já não eram mais humanos e sim marcianos contaminados e um desejo de transformar o resto da colônia que sobrou, fazendo uma nova raça, a raça de Marcianos!")
console.log("De qual lado você está?")

//variável para a escolha do personagem 
let personagem = 2
  switch (personagem){
  case 1:
  console.log("Humanos")
  console.log("não podemos deixar e nos contaminar!")
  break
  
  case 2:
  console.log("contaminados")
  console.log("já não somos mais humanos eem breve vocês também não serão mais!")
  break
  }
  
// Função para calcular o saldo de rankeadas
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Função para determinar o nível com base no número de vitórias
function determinarNivel(vitorias) {
  if (vitorias < 10) {
    return "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    return "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    return "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    return "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    return "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

// Exemplo de utilização das funções
const vitorias = 60;
const derrotas = 20;

const saldo = calcularSaldo(vitorias, derrotas);
const nivel = determinarNivel(vitorias);

console.log(`O herói tem um saldo de ${saldo} vitórias e está no nível de ${nivel}.`);

switch (personagem){
  case 1:
  console.log("Graças a Deus conseguimos derrotar aquelas bestas asquerosas!")
  break
  
  case 2:
  console.log("Gwwwarrrrr, Viva o império Marciano, a Terra será a nossa próxima conquista!")
  break
  }


