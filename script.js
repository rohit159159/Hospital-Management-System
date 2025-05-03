document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const rotateText = document.querySelector('.txt-rotate');
    const texts = JSON.parse(rotateText.getAttribute('data-rotate'));
    const period = rotateText.getAttribute('data-period');
    let currentIndex = 0;

    // Create span elements for each text
    texts.forEach((text, index) => {
        const span = document.createElement('span');
        span.textContent = text;
        span.className = index === 0 ? 'active' : ''; // Set the first span as active
        rotateText.appendChild(span);
    });

    function rotate() {
        const spans = rotateText.querySelectorAll('span');
        spans[currentIndex].classList.remove('active'); // Remove active class from current
        currentIndex = (currentIndex + 1) % spans.length; // Move to the next index
        spans[currentIndex].classList.add('active'); // Add active class to the next
    }

    // Start the rotation every specified period
    setInterval(rotate, period);
});

//
document.getElementById('chatbot-icon').onclick = function() {
    document.getElementById('chatbot-modal').style.display = 'block';
}

document.getElementById('close-chatbot').onclick = function() {
    document.getElementById('chatbot-modal').style.display = 'none';
}

// Optional: Handle sending messages
document.getElementById('send-chat').onclick = function() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message) {
        const messagesContainer = document.querySelector('.chatbot-messages');
        messagesContainer.innerHTML += `<div>User: ${message}</div>`;
        input.value = '';
        // You can add logic to generate chatbot responses here
    }
}


