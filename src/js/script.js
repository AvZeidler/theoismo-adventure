window.onload = function () {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('2024-09-12T00:00:00');
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


    btnAceito.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    btnFechar.addEventListener('click', () => {
        window.close();
    });

    btnClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });
}