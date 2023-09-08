const messages = {
    happy: ["Stay positive!", "You're doing great!", "Happiness is a choice."],
    sad: ["Better days are coming.", "You're not alone.", "It's okay to feel down sometimes."],
    okay: ["You got this!", "Stay focused!", "Keep moving forward."],
    love: ["Love is in the air!", "Cherish the moments!", "Spread love and happiness."],
    need_motivation: ["Believe in yourself!", "Keep pushing forward!", "You are capable of great things."],
};

function generateMessage() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const moodSelect = document.getElementById("mood");
    const mood = moodSelect.options[moodSelect.selectedIndex].value;
    const messageContainer = document.getElementById("motivationMessage");
    
    if (name.trim() === '' || age.trim() === '') {
        messageContainer.innerHTML = "<p>Please fill in all required fields.</p>";
    } else if (messages.hasOwnProperty(mood)) {
        const randomIndex = Math.floor(Math.random() * messages[mood].length);
        const message = messages[mood][randomIndex];
        messageContainer.innerHTML = `<p>Hi ${name}, at ${age} years old, remember: ${message}</p>`;
    } else {
        messageContainer.innerHTML = "<p>Invalid mood selected. Please select a valid mood.</p>";
    }
}