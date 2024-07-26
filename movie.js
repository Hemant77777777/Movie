const APIURL =  // getting most popular movies from this API
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";// getting   Movies that  can be searched 
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector("#movie-box");
const getMovies = async(api) => {
    const response = await fetch(api);
    const data  = await response.json();
    showMovies(data.results);
} 
const showMovies = (data) => 
{
    // empty the movie box for getting searched movie at top..
    movieBox.innerHTML = "";
    data.forEach((item) =>{
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
        <img src="${IMGPATH + item.poster_path}" alt=""/>
        <div class="overlay">
        <div class="Title">
        <h2>${item.original_title}</h2>
        <span>${item.vote_average} <span>
        </div>
        <h3>Overview:</h3>
        <p> ${item.overview}</p>
        </div>
        `;
        movieBox.appendChild(box);
    } )
    
}
document.querySelector("#search").addEventListener("keyup",
function(event)
{
 // console.log(event.target.value); used for searching..
  if(event.target.value != "")
  {
        getMovies(SEARCHAPI+event.target.value);
  }
  else 
  {

  }

})
document.querySelector("#movie-box").addEventListener("click", function(event)
{
    console.log(event.target);
})
// init call : Initial call just after loading page..
getMovies(APIURL)