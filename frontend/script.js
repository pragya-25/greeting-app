async function getGreeting() {
    const name = document.getElementById('nameInput').value;
    const messageEl = document.getElementById('greetingMessage');

    try {
        const response = await fetch(`http://localhost:3000/api/greet?name=${name}`);
        const data = await response.json();

        if (data.error) {
            messageEl.textContent = `Error: ${data.error}`;
        } else {
            messageEl.textContent = data.message;
        }
    } catch (error) {
        messageEl.textContent = 'Failed to fetch greeting.';
    }
}
