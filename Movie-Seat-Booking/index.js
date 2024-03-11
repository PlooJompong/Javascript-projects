const container = $(".container");
const seats = $(".row .seat:not(.occupied)");
const count = $("#count");
const movieSelect = $("#movie");
const total = $("#total");

let ticketPrice = +movieSelect.val();

container.on("click", (e) => {
  if ($(e.target).hasClass("seat") && !$(e.target).hasClass("occupied")) {
    $(e.target).toggleClass("selected");
    updateSelectedCount();
  }
});

movieSelect.on("change", (e) => {
  ticketPrice = $(e.target).val();
  updateSelectedCount();
});

function updateSelectedCount() {
  const selectedSeats = $(".row .seat.selected");

  const seatsIndex = selectedSeats
    .map(function() {
      return seats.index($(this));
    })
    .get();

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.text(selectedSeatsCount);
  total.text(selectedSeatsCount * ticketPrice);
}
