const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');
const dataMes = document.getElementById('title');

function formatarDataHora() {
  const date = new Date();
  return {
    data: date.toLocaleDateString('pt-BR'),
    hora: date.getHours().toString().padStart(2, '0'),
    minuto: date.getMinutes().toString().padStart(2, '0'),
    segundo: date.getSeconds().toString().padStart(2, '0'),
  };
}

function ExibirDataHora() {
  const { data, hora: hr, minuto: min, segundo: seg } = formatarDataHora();

  dataMes.innerText = data;
  hora.innerText = hr;
  minuto.innerText = min;
  segundo.innerText = seg;
}

// atualiza a cada 1s
setInterval(ExibirDataHora, 1000);
