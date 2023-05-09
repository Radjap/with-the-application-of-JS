$(document).ready(function () {
  $(".header__top-burger").click(function (event) {
    $(
      ".header__top-burger,.header__top-menu, .top-buttons__button,.header__title-span"
    ).toggleClass("active");
    $("body").toggleClass("lock");
  });
});
