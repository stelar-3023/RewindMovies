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
