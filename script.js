function startCountdown() {
    const eventDate = new Date("April 25, 2025 19:00:00").getTime();
    const countdownElement = document.getElementById("countdown");

    const updateCountdown = setInterval(() => {
        const now = new Date().getTime();
        const difference = eventDate - now;
        
        if (difference <= 0) {
            clearInterval(updateCountdown);
            countdownElement.innerHTML = "🎉 O grande dia chegou! 🎉";
            return;
        }
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

startCountdown();