$(document).ready(function(){
  var slideshowContainter = $('.slideshowContainter');
  setInterval(function(){

    slideshowContainter.addClass('transition').css('transform', 'translateX(-1000px)');

    setTimeout(function(){
      var firstSlide = $('.slide').first();
      slideshowContainter.append(firstSlide)
      slideshowContainter.removeClass('transition').css('transform', 'translateX(0)');
    }, 700)
  }, 3000)


  $('#nextBttn').click(function(){
    var firstSlide = $('.slide').first();
    //cloning method//
    // var clonedSlide = firstSlide.clone();
    // firstSlide.remove();
    // slideshowContainter.append(clonedSlide);
    slideshowContainter.append(firstSlide);
  });





});
