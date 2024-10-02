document.addEventListener('DOMContentLoaded', function() {
    const carta = document.getElementById('carta')
    const pagina = document.getElementById('pagina')
    const voltarButton = document.getElementById('voltar')

    pagina.style.opacity = 0;
    pagina.style.transition = 'opacity 0.3s ease'

    carta.addEventListener('click', function() {
        carta.style.display = 'none'
        pagina.style.display = 'flex'
        voltarButton.style.display = 'block'

        setTimeout(() => {
            pagina.style.opacity = 1
        }, 10)
    });

    voltarButton.addEventListener('click', function() {
        pagina.style.opacity = 0;

        setTimeout(() => {
            pagina.style.display = 'none';
            carta.style.display = 'flex'; 
            voltarButton.style.display = 'none'; 
        }, 300);
    });
});

window.onload = function () {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('2027-03-25T00:00:00');

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

    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = "⏸️";
        } else {
            audio.pause();
            playPauseButton.innerHTML = "▶️";
        }
    });

    audio.addEventListener('timeupdate', () => {
        const value = (audio.currentTime / audio.duration) * 100;
        seekBar.value = value;
    });

    seekBar.addEventListener('input', () => {
        const seekTime = (seekBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });

    volumeButton.addEventListener('click', () => {
        audio.muted = !audio.muted;
        volumeButton.innerHTML = audio.muted ? "🔇" : "🔊";
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100;
    });
});
