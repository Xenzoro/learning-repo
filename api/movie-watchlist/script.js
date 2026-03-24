// Define the base URL for the OMDb API
// Replace the API key with your own if needed

// Get references to DOM elements for search input, results, and watchlist sections
const search = document.getElementById("movie-search")
const result = document.getElementById("movie-results")
const watchListSection = document.getElementById("watchlist")
const searchForm = document.getElementById("search-form")

// Global array to store movies added to the watchlist
const watchlist = [];



// Event listener for the search form submission
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const query = search.value.trim();
    if (query === "") {
        result.innerHTML = "No results found.";
        return;
    }
    const apiUrl = `http://www.omdbapi.com/?apikey=927f0677&s=${encodeURIComponent(query)}`;
    getMovie(apiUrl);
});

// Function to fetch movie data from the OMDb API
// Takes the API URL as input
// Updates the results section with movie cards or a 'No movies found' message
async function getMovie(apiUrl){

    // Fetch movie data from OMDb API
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    result.innerHTML = "";

    if (data.Search) {
        data.Search.forEach(movie => {
            const card = createMovieCard(movie);
            result.appendChild(card);
        });
    } else {
        result.innerHTML = "No movies found.";
    }
}

// Event listeners for modal functionality
// Close the modal when the close button is clicked or when clicking outside the modal
const modal = document.getElementById("movie-details-modal");
const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Function to open the modal and display detailed movie information
// Fetches detailed data for a movie using its imdbID
// Updates the modal content with the fetched data
// Displays an error message if the fetch fails
function openModal(movie) {
  const apiUrl = `http://www.omdbapi.com/?apikey=927f0677&i=${movie.imdbID}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById("modal-poster").src = data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/300x450?text=No+Image";
      document.getElementById("modal-title").textContent = data.Title;
      document.getElementById("modal-year").textContent = `Year: ${data.Year}`;
      document.getElementById("modal-rating").textContent = `Rating: ${data.imdbRating || 'N/A'}`;
      document.getElementById("modal-genre").textContent = `Genre: ${data.Genre || 'N/A'}`;
      document.getElementById("modal-director").textContent = `Director: ${data.Director || 'N/A'}`;
      document.getElementById("modal-cast").textContent = `Cast: ${data.Actors || 'N/A'}`;
      document.getElementById("modal-plot").textContent = `Plot: ${data.Plot || 'N/A'}`;

      modal.style.display = "block";
    })
    .catch(error => {
      console.error("Error fetching movie details:", error);
      alert("Failed to load movie details. Please try again later.");
    });
}

// Function to create a movie card element
// Takes a movie object and a flag indicating if it's for the watchlist
// Includes a 'Details' button to open the modal
// Includes an 'Add to Watchlist' button for search results
// Includes a 'Remove' button for the watchlist
function createMovieCard(movie, isWatchlist = false) {
  const card = document.createElement("div");
  card.className = "movie-card";

  const poster = document.createElement("img");
  poster.className = "movie-poster";
  poster.src = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image";
  poster.alt = `Poster for ${movie.Title}`;

  const info = document.createElement("div");
  info.className = "movie-info";

  const title = document.createElement("div");
  title.className = "movie-title";
  title.textContent = movie.Title;

  const year = document.createElement("div");
  year.className = "movie-year";
  year.textContent = movie.Year;

  const detailsBtn = document.createElement("button");
  detailsBtn.className = "btn btn-details";
  detailsBtn.textContent = "Details";
  detailsBtn.addEventListener("click", () => openModal(movie));

  info.appendChild(title);
  info.appendChild(year);
  info.appendChild(detailsBtn);

  if (!isWatchlist) {
    const addBtn = document.createElement("button");
    addBtn.className = "btn";
    addBtn.textContent = "Add to Watchlist";
    addBtn.addEventListener("click", function() {
      if (!watchlist.some(item => item.imdbID === movie.imdbID)) {
        watchlist.push(movie);
        renderWatchlist();
      }
    });
    info.appendChild(addBtn);
  } else {
    const removeBtn = document.createElement("button");
    removeBtn.className = "btn remove-btn";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function() {
      const index = watchlist.findIndex(item => item.imdbID === movie.imdbID);
      if (index !== -1) {
        watchlist.splice(index, 1);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        renderWatchlist();
      }
    });
    info.appendChild(removeBtn);
  }

  card.appendChild(poster);
  card.appendChild(info);
  return card;
}

// Event listener to load the watchlist from localStorage on page load
// Parses the saved watchlist and renders it
window.addEventListener("load", function() {
    const savedWatchlist = localStorage.getItem("watchlist");
    if (savedWatchlist) {
        watchlist.push(...JSON.parse(savedWatchlist));
    }
    renderWatchlist();
});

// Function to render the watchlist section
// Clears the watchlist section
// Displays a message if the watchlist is empty
// Creates and appends movie cards for each movie in the watchlist
// Saves the updated watchlist to localStorage
function renderWatchlist() {
    watchListSection.innerHTML = "";

    if (watchlist.length === 0) {
        // Show empty message if watchlist is empty
        watchListSection.textContent = "Your watchlist is empty. Search for movies to add!";
        return;
    }

    // For each movie in the watchlist, create a card
    watchlist.forEach(movie => {
        const card = createMovieCard(movie, true);
        watchListSection.appendChild(card);
    });

    // Save updated watchlist to localStorage
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
}