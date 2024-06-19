function verificar() {
    var resposta = document.getElementById('resposta').value; // Usei value em vez de innerHTML
    var mensagem = document.getElementById('mensagem').textContent; // Usei textContent em vez de innerHTML
    
    // Defina a string "Ganhou"
    var ganhou = "Ganhou";

    // Obtenha o elemento de vídeo
    var video = document.getElementById('video'); // Certifique-se de que há um elemento de vídeo com id="video"

    if (resposta === ganhou) {
        video.src = 'Hino do Corinthians ( Oficial ).mp4';
    } else {
        video.src = 'Seus zé ruela, seus orelhudo.mp4';
    }
}