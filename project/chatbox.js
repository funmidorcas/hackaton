// Function to send the user's message and get a bot response
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (!message) return;

    displayMessage(message, 'message-user');  // Display the user's message
    input.value = '';  // Clear input field

    // Simulate bot response after a short delay
    setTimeout(() => {
        const botResponse = generateBotResponse(message);
        displayMessage(botResponse, 'message-bot');  // Display bot's message
    }, 1000);
}

// Function to display the message in the chatbox
function displayMessage(text, sender) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;  // Auto-scroll to latest message
}

// Function to generate a simple bot response
function generateBotResponse(userMessage) {
    if (userMessage.toLowerCase().includes('hello')) {
        return 'Hi there! How can I help you?';
    } else if (userMessage.toLowerCase().includes('how are you')) {
        return 'I\'m just a bot, but I\'m doing great! How about you?';
    } else if (userMessage.toLowerCase().includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else {
        return 'I didn\'t quite understand that. Can you ask something else?';
    }
}
