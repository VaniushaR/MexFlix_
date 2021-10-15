//rendering movies into DOM
const renderingMovies = (movie) => {
      const movieTitle = document.getElementById("movie-title")
      const moviePoster = document.getElementById("movie-poster")
      const movieYear = document.getElementById("movie-year")

      movieTitle.innerHTML = movie.Title
      moviePoster.setAttribute("src", movie.Poster)
      movieYear.innerHTML = movie.Year
      
}

//bring data from API for searcher with my key and dynamic title vlaues
export const getMoviesFromAPI = (movieToSearch) => {
      console.log(movieToSearch)
      fetch(" http://www.omdbapi.com/?t="+ `${movieToSearch}` +"&apikey=c05a093b")
      .then( (response) => { console.log(response)
            if(response.code == 400) {
                  alert("Esta película no se encuentra en el catálogo... ")
            } else {
                  response.json()
                  .then((data) => renderingMovies(data))
                  .catch((error) => console.log(error))
            }
      })
}
//rendering pre-selection
const renderingSelection = (movie) => {
      //create dinamically elements one by one with create element method
      const movieCard = document.createElement("ARTICLE")
      const movieIMG = document.createElement("IMG")
      const movieTitleSelected = document.createTextNode(`${movie.Title}`)
      //append childs to the card movieCard
      
      movieCard.appendChild(movieIMG)
      movieCard.appendChild(movieTitleSelected)

      //set attributes, src, classes etc
      movieCard.setAttribute("class","card movie-card")
      movieCard.setAttribute("id", movie.Title)
      movieIMG.setAttribute("src", movie.Poster)

      //append 
      document.getElementById("movie-cards").appendChild(movieCard)
      document.getElementById(movie.Title).appendChild(movieIMG)
      
}

//bring movies for special selections
const getSpecialSelection = (titleToSearch) => {
      fetch("https://www.omdbapi.com/?t="+ `${titleToSearch}` +"&apikey=c05a093b")
      .then( (response) => response.json())
      .then((data) => renderingSelection(data))
      .catch((error) => console.log(error))
}
//array for create special selections
let selection = ["lola", "iron man", "mad max", "monica"]

for (const movieItem of selection) {
      getSpecialSelection(movieItem)
      
}