onload = () => {
    document.body.classList.remove("container");

    const textElement = document.querySelector(".typing-text");

    const messages = [
        "Hai Mas Gilang ❤️",
        "Terimakasih Sudah Mengucapkan Cinta setiap Hari 🌷",
        "Terimakasih Untuk Dongeng 10/10 itu  😊",
        "Semoga harimu selalu indah ✨",
        "I Love You Dikit❤️"
    ];

    let messageIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < messages[messageIndex].length) {
            textElement.textContent += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(() => {
                textElement.textContent = "";
                charIndex = 0;
                messageIndex++;

                if (messageIndex >= messages.length) {
                    messageIndex = 0;
                }

                typeText();
            }, 2000);
        }
    }

    typeText();
};
