// Get the ball element
const ball = document.querySelector('.ball');

// Add event listener for mousedown event
ball.addEventListener('mousedown', (event) => {
  // Store the initial position of the ball
  const initialX = event.clientX;
  const initialY = event.clientY;

  // Calculate the offset between the initial position and the ball's current position
  const offsetX = initialX - ball.offsetLeft;
  const offsetY = initialY - ball.offsetTop;

  // Add event listeners for mousemove and mouseup events
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);

  // Function to handle mousemove event
  function handleMouseMove(event) {
    // Calculate the new position of the ball
    const newLeft = event.clientX - offsetX;
    const newTop = event.clientY - offsetY;

    // Update the position of the ball element
    ball.style.left = `${newLeft}px`;
    ball.style.top = `${newTop}px`;
  }

  // Function to handle mouseup event
  function handleMouseUp() {
    // Remove event listeners for mousemove and mouseup events
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }
});

// Get the ball element


// Array of wisdom quotes
const wisdomArray = [
  "“That's dynamic, attacking rugby. And the result is three points.”",
  "“It's sunday. If you want to go to church, go there and worship Brian O'driscoll,”",
  " “Richie was one of the greatest referees of the 21st century,”",
  "“He came from mozambique then, running from deep,”",
  "“Australia without Pocock is like Hamlet without the prince,”",
  "“You have to play well if you're dressed like that,”",
  "“It's not his physical presence that makes him such a threat, it's the magic in his boots,”",
  "“You don't need tries to win World Cups, just points,”",
  "“Kurtley Beale is prowling, Brad Barritt is bleeding”",
  "“Who is this team in white?”",
];

// Variable to store the quote element
let quoteElement = null;

// Add event listener for mouseup event
ball.addEventListener('mouseup', () => {
  // Remove the existing quote element if it exists
  if (quoteElement) {
    quoteElement.remove();
  }

  // Select a random quote from the wisdomArray
  const randomQuote = wisdomArray[Math.floor(Math.random() * wisdomArray.length)];

  // Create a new element to display the quote
  quoteElement = document.createElement('div');
  quoteElement.classList.add('quote');
  quoteElement.textContent = randomQuote;

  // Append the quote element to the container
  const container = document.querySelector('.container');
  container.appendChild(quoteElement);
});