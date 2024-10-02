document.addEventListener("DOMContentLoaded", () => {
    const carta = document.getElementById('carta');
    const pagina = document.getElementById('pagina');
    const voltar = document.getElementById('voltar');


    carta.addEventListener('click', () => {
        carta.style.display = 'none'; // Esconde a carta
        pagina.style.display = 'block'; // Mostra a nova página
    });

    voltar.addEventListener('click', () => {
        pagina.style.display = 'none'; // Esconde a nova página
        carta.style.display = 'flex'; // Mostra a carta novamente
    });
});

window.onload = function () {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('2027-03-25T00:00:00');
    const popup = document.getElementById('popup');
    const btnAceito = document.getElementById('btnAceito');
    const btnFechar = document.getElementById('btnFechar');
    const btnClose = document.getElementById('btnClose');

    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Acabou o tempo...";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('playPause');
    const seekBar = document.getElementById('seekBar');
    const volumeButton = document.getElementById('volumeButton');
    const volumeBar = document.getElementById('volumeBar');

    // Toggle play/pause
    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = "⏸️"; // Pausa
        } else {
            audio.pause();
            playPauseButton.innerHTML = "▶️"; // Play
        }
    });

    // Update the seek bar as the audio plays
    audio.addEventListener('timeupdate', () => {
        const value = (audio.currentTime / audio.duration) * 100;
        seekBar.value = value;
    });

    // Seek audio when the seek bar is changed
    seekBar.addEventListener('input', () => {
        const seekTime = (seekBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });

    // Volume control
    volumeButton.addEventListener('click', () => {
        audio.muted = !audio.muted; // Alterna mudo
        volumeButton.innerHTML = audio.muted ? "🔇" : "🔊"; // Muda ícone
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100; // Ajusta volume
    });
});