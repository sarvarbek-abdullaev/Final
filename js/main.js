$(document).ready(function () {
  $(".prev-button").click(function () {
    $("#myCarousel").carousel("prev");
  });

  $(".next-button").click(function () {
    $("#myCarousel").carousel("next");
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
