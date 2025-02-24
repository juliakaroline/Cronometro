function atualizarContagemRegressiva() {
    const dataFutura = new Date("December 31, 2025 23:59:59").getTime();
    const agora = new Date().getTime();
    const diferenca = dataFutura - agora;

    if (diferenca <= 0) {
        document.getElementById("anos").textContent = "0";
        document.getElementById("dias").textContent = "0";
        document.getElementById("horas").textContent = "0";
        document.getElementById("minutos").textContent = "0";
        document.getElementById("segundos").textContent = "0";
        clearInterval(intervalo);
        return;
    }

    const segundosTotal = Math.floor(diferenca / 1000);
    const anos = Math.floor(segundosTotal / (60 * 60 * 24 * 365));
    const dias = Math.floor((segundosTotal % (60 * 60 * 24 * 365)) / (60 * 60 * 24));
    const horas = Math.floor((segundosTotal % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((segundosTotal % (60 * 60)) / 60);
    const segundos = Math.floor(segundosTotal % 60);

    document.getElementById("anos").textContent = anos;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

atualizarContagemRegressiva(); // Executa uma vez imediatamente
const intervalo = setInterval(atualizarContagemRegressiva, 1000); // Atualiza a cada segundo
