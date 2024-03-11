const container = $(".container");
const seats = $(".row .seat:not(.occupied)");
const count = $("#count");
const movieSelect = $("#movie");
const total = $("#total");

populateUI();

let ticketPrice = +movieSelect.val();

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

function updateSelectedCount() {
  const selectedSeats = $(".row .seat.selected");

  const seatsIndex = selectedSeats
    .map(function () {
      return seats.index($(this));
    })
    .get();

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.text(selectedSeatsCount);
  total.text(selectedSeatsCount * ticketPrice);
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats && selectedSeats.length > 0) {
    seats
      .filter(function (index) {
        return selectedSeats.includes(index);
      })
      .addClass("selected");
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.prop("selectedIndex", selectedMovieIndex);
  }
}

movieSelect.on("change", function () {
  ticketPrice = +$(this).val();
  setMovieData($(this).prop("selectedIndex"), ticketPrice);
  updateSelectedCount();
});

container.on("click", ".seat:not(.occupied)", function () {
  $(this).toggleClass("selected");
  updateSelectedCount();
});

updateSelectedCount();
