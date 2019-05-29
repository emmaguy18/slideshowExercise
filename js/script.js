$(document).ready(function(){
  //console.log("jquery has loaded");
  $('.slideshowBttns').click(function(){
    // console.log('button clicked')
    setInterval(function(){
      // $('#slideshowItem-1').first();
      // console.log('this is the first slide');
    }, 2000)
  });


  $('#slideshowItem-1').first();
  console.log('this is the first slide');


});
