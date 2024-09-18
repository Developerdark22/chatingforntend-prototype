// script.js
const chatList = document.querySelector('.chat-list');
const chatItems = chatList.querySelectorAll('.chat-item');

// Add event listener to each chat item for active state
chatItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all chat items
        chatItems.forEach(item => item.classList.remove('active'));

        // Add active class to the clicked item
        item.classList.add('active');
    });
});

// Add event listener to create new chat button
const createChatButton = document.querySelector('.create-chat');
createChatButton.addEventListener('click', () => {
    // Logic for creating a new chat
    // Example: Open a modal for chat creation
    alert('New Chat Feature is Coming Soon!');
});

// Add event listener to more options button
const moreOptionsButton = document.querySelector('.more-options');
moreOptionsButton.addEventListener('click', () => {
    // Logic for showing more options
    // Example: Open a dropdown menu
    alert('More Options Coming Soon!');
});