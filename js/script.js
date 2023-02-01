$(document).ready(function () {
  if ($(".deliveryList").length > 0) {
    $(".deliveryitem .name").click(function () {
      $(".deliveryitem .name").removeClass("open");
      $(".deliveryitem .drop").not($(this).next()).stop().slideUp();
      $(this).addClass("open").next().stop().slideDown();
    });
  }
});
