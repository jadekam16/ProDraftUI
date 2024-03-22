// Add an event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('confirm').addEventListener('click', submitForm);
});

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Parse form data
    const formData = parseFormData();

    // If form data is valid, update HTML content
    if (formData) {
        updateHTML(formData);
    } else {
        alert('Please fill out all player names.'); // Alert user if player names are not filled out
    }
}

// Function to parse form data
function parseFormData() {
    const formData = {
        redTeam: document.getElementById('red-team-name').value,
        redPlayers: [],
        blueTeam: document.getElementById('blue-team-name').value,
        bluePlayers: []
    };

    // Extract red team player names
    for (let i = 1; i <= 5; i++) {
        const playerName = document.getElementById(`red-player-${i}-name`);
        if (!playerName) {
            console.error(`Could not find red player ${i} name element.`);
            return null;
        }
        formData.redPlayers.push(playerName.textContent.trim());
    }

    // Extract blue team player names
    for (let i = 1; i <= 5; i++) {
        const playerName = document.getElementById(`blue-player-${i}-name`);
        if (!playerName) {
            console.error(`Could not find blue player ${i} name element.`);
            return null;
        }
        formData.bluePlayers.push(playerName.textContent.trim());
    }

    return formData;
}

// Function to update HTML content
function updateHTML(formData) {
    // Update team names
    const teamOneName = document.querySelector('.team-names.team-one');
    const teamTwoName = document.querySelector('.team-names.team-two');
    if (!teamOneName) {
        console.error('Could not find team one name element.');
        return;
    }
    if (!teamTwoName) {
        console.error('Could not find team two name element.');
        return;
    }
    teamOneName.textContent = formData.redTeam;
    teamTwoName.textContent = formData.blueTeam;

    // Update player names
    for (let i = 1; i <= 5; i++) {
        const redPlayerName = document.getElementById(`red-player-${i}-name`);
        const bluePlayerName = document.getElementById(`blue-player-${i}-name`);
        if (!redPlayerName) {
            console.error(`Could not find red player ${i} name element.`);
            return;
        }
        if (!bluePlayerName) {
            console.error(`Could not find blue player ${i} name element.`);
            return;
        }
        redPlayerName.textContent = formData.redPlayers[i - 1];
        bluePlayerName.textContent = formData.bluePlayers[i - 1];
    }
}
