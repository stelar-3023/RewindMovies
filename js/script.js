$(document).ready(() => {
  $("#searchForm").on("submit", (event) => {
    // console.log($("#searchText").val());
    let searchText = $("#searchTitle").val();
    getMovie(searchText);
    event.preventDefault();
  });
});

const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885&";
const getMovie = async (searchTitle) => {
  try {
    const response = await (await fetch(apiurl + "s=" + searchTitle)).json();
    let movies = response.Search;
    let selected = "";
    $.each(movies, (index, movie) => {
      selected += `
      <div class="col-md-3">
        <div class="poster text-center">
          <img src="${movie.Poster}">
          <h5>${movie.Title}</h5>
          <a onclick="moreInfo('${movie.imdbID}')" class="btn btn-warning" style="margin-bottom: 10px" href="#">More Info</a>
        </div>
      </div>
      `;
    });
    console.log(movies);
    $("#movies").html(selected);
  } catch (err) {
    console.log(err);
  }
};

// pass data to poster.html
function moreInfo(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "poster.html";
  return false;
}

const getMovieById = async () => {
  let movieId = sessionStorage.getItem("movieId");
  try {
    const response = await (await fetch(apiurl + "i=" + movieId)).json();
    console.log(response);
    console.log(typeof response);
    let poster = response.Poster;
    let year = response.Year;
    let genre = response.Genre;
    let cast = response.Actors;
    let title = response.Title;
    let plot = response.Plot;
    console.log(poster);
    let selected = `
    <div class="row">
      <div>
        <h2>${title}</h2>
        <img src="${poster}">
      </div>
    </div>
    <div class="row">
    </hr>
      <p>Released: ${year}</p>
      <p>Genre: ${genre}</P>
      <p>Cast: ${cast}</p>
      <div class="poster">
      <hr>
      <h3>About</h3>
      ${plot}
      </div>
    </div>    
    `;
    $("#movie").html(selected);
  } catch (err) {
    console.log(err);
  }
};
