// Select the dropdown menu and gallery container elements from the HTML
const breedSelect = document.getElementById('breed-select'); // Dropdown menu for selecting a dog breed
const gallery = document.getElementById('gallery'); // Container to display dog images

// Fetch the list of dog breeds from the Dog API using async/await
async function fetchBreeds() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all'); // Fetch the list of breeds
    const data = await response.json(); // Parse the JSON response
    const breeds = data.message; // The breeds object containing all dog breeds

    // Populate the dropdown menu with the list of breeds
    for (const breed in breeds) {
      const option = document.createElement('option'); // Create an option element
      option.value = breed; // Set the value of the option to the breed name
      option.textContent = breed; // Set the display text of the option to the breed name
      breedSelect.appendChild(option); // Add the option to the dropdown menu
    }
  } catch (error) {
    console.error('Error fetching dog breeds:', error); // Log any errors that occur during the dog-fetch
  }
}

// Fetch and display 9 images of the selected breed using async/await
async function fetchBreedImages(breed) {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/9`); // Fetch 9 random images of the breed
    const data = await response.json(); // Parse the JSON response

    gallery.innerHTML = ''; // Clear any previously displayed images
    // Loop through the array of image URLs and create an image element for each
    data.message.forEach(imageUrl => {
      const img = document.createElement('img'); // Create an image element
      img.src = imageUrl; // Set the image source to the fetched URL
      img.alt = `${breed} image`; // Set the alt text for accessibility
      gallery.appendChild(img); // Add the image to the gallery container
    });
  } catch (error) {
    console.error('Error fetching dog images:', error); // Log any errors that occur during the dog-fetch
  }
}

// Initialize the dropdown menu with breeds
fetchBreeds();

// Add an event listener to dog-fetch and display 9 images of the selected breed
breedSelect.addEventListener('change', function() {
  const selectedBreed = breedSelect.value; // Get the selected breed from the dropdown menu
  if (selectedBreed) {
    fetchBreedImages(selectedBreed); // Fetch and display images for the selected breed
  } else {
    gallery.innerHTML = ''; // Clear the gallery if no breed is selected
  }
});
