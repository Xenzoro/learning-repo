// Select the button and joke container elements from the HTML
const jokeBtn = document.getElementById('joke-btn');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');

// Add an event listener to the button
jokeBtn.addEventListener('click', function() {
  console.log('Getting a programming joke...');

  // Fetch a random programming joke from the Official Joke API
  fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(response => response.json())
    .then(data => {
      const joke = data[0]; // The API returns an array with one joke
      setup.textContent = joke.setup; // Display the setup on the page
      punchline.textContent = joke.punchline; // Display the punchline on the page
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
    });
});
