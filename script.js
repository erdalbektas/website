document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');
    const commandInput = document.getElementById('command-input');

    const commands = {
        help: () => {
            const availableCommands = Object.keys(commands).join(', ');
            return `Available commands: ${availableCommands}. Each command will show relevant information.`;
        },
        about: () => "This is a placeholder for the About section. Content will be updated soon.",
        projects: () => "This is a placeholder for Projects. Check back later for updates.",
        blog: () => "This is a placeholder for the Blog. New posts are coming soon!",
        investors: () => "Placeholder for Investor Relations information.",
        social: () => "Placeholder for Social Media links. Connect with us soon!"
        // Add more commands here as needed
    };

    commandInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const commandText = commandInput.value.trim();

            if (commandText === '') {
                return; // Do nothing if the command is empty
            }

            // Display the entered command
            const commandLine = document.createElement('p');
            commandLine.textContent = `> ${commandText}`;
            outputDiv.appendChild(commandLine);

            let outputText;
            if (commands[commandText]) {
                outputText = commands[commandText](); // Execute the command function
            } else if (commandText === 'help') { // Ensure help is explicitly handled if not in commands obj directly or for override
                 outputText = commands.help();
            }
            else {
                outputText = `Command not found: ${commandText}. Type 'help' for commands.`;
            }

            // Display the command's output
            const outputLine = document.createElement('p');
            outputLine.textContent = outputText;
            outputDiv.appendChild(outputLine);

            // Clear the input field
            commandInput.value = '';

            // Scroll to the bottom of the output
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    });

    // Optional: Initial welcome message or focus on input
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = "Welcome to the interactive terminal. Type 'help' to see available commands.";
    outputDiv.appendChild(welcomeMessage);
    commandInput.focus();
});
