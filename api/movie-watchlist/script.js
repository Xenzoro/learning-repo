// http://www.omdbapi.com/?apikey=[927f0677]&

 const search = document.getElementById("movie-search")
 const result = document.getElementById("movie-results")
 const watchList = document.getElementById("watchlist")
 const searchForm = document.getElementById("search-form")
 const searchButton = document.getElementById("search-button")


searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const query = search.value.trim(); // stores value into here with excess cut off
    const apiUrl = `http://www.omdbapi.com/?apikey=927f0677&s=${encodeURIComponent(query)}`; //stores value into variable for use in api call?
    getMovie(apiUrl); // calls the function

    async function getMovie(apiUrl){
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        if(data.Search){
            data.Search.forEach(movie => {
                const poster = movie.Poster;
                const title = movie.Title;
                const year = movie.Year;
            });

        }




    }





});

