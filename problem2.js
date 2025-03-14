// Declaring function delayedGreeting with a parameter name to delay
// the greeting message by 2 seconds
function delayedGreeting(name) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`); // Logs the greeting message after 2 seconds
    }, 2000); // Declaring seconds of delay 
}

// Testing
delayedGreeting("Alice"); // Logs "Hello, Alice!" after 2 seconds
