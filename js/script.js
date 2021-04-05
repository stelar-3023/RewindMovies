$(document).ready(() => {
  $("#searchForm").on("submit", (event) => {
    // console.log($("#searchText").val());
    let searchText = $("#searchTitle").val();
    getMovie(searchText);
    event.preventDefault();
  });
});

const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885&";

// function getMovie(searchText) {
//   fetch(apiurl + "s=" + searchText)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.log(err));
// }

const getMovie = async (searchTitle) => {
  console.log("async fetch");
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
          <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-danger" style="margin-bottom: 10px" href="#">More Info</a>
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
