document.addEventListener("DOMContentLoaded", function () {
    startCountdown();
    handleScrollEffects();
});

function startCountdown() {
    const eventDate = new Date("April 25, 2025 19:00:00").getTime();
    const countdownElement = document.getElementById("countdown");

    const updateCountdown = setInterval(() => {
        const now = new Date().getTime();
        const difference = eventDate - now;
        
        if (difference <= 0) {
            clearInterval(updateCountdown);
            countdownElement.innerHTML = "🎉 O grande dia chegou! 🎉";
            countdownElement.style.animation = "none";
            return;
        }
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        countdownElement.style.animation = "fadeIn 0.5s ease";
    }, 1000);
}

// Efeito de revelar seções ao rolar
function handleScrollEffects() {
    const elements = document.querySelectorAll(".descricao");
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        
        elements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            
            if (position < windowHeight * 0.85) {
                element.classList.add("reveal");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Executa na inicialização
}
