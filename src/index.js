//DOM events handlers
import { getMoviesFromAPI } from "./data.js"
const searcher = () => {
      console.log("btn search pressed")
      let inputSearch = document.getElementById("input-search").value
      let showResults = document.getElementById("search-results")
      showResults.hidden = false;
      getMoviesFromAPI(inputSearch)
}

let buttonSearch = document.getElementById("button-addon2")
buttonSearch.addEventListener("click", searcher)