$(document).ready(function () {
  var carousel = $('.carousel');
  var productWidth = $('.product').outerWidth();
  var prevBtn = $('.prev-btn');
  var nextBtn = $('.next-btn');

  carousel.append(carousel.children('.product').first().clone());

  nextBtn.click(function () {
    carousel.animate({ left: '-=' + productWidth }, 500, function () {
      carousel.append(carousel.children('.product').first().clone());
      carousel.children('.product').first().remove();
      carousel.css('left', 0);
    });
  });

  prevBtn.click(function () {
    carousel.prepend(carousel.children('.product').last().clone());
    carousel.children('.product').last().remove();
    carousel.css('left', '-' + productWidth + 'px');

    carousel.animate({ left: '+=' + productWidth }, 500);
  });

  setInterval(function () {
    nextBtn.click();
  }, 3000);
});
