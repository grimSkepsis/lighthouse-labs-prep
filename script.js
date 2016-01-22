
$(document).ready(function(){
resizeDiv();
  console.log("document ready!");
});

window.onresize = function(event) {
  resizeDiv();
}

function resizeDiv() {
  aspectRatio = 16/9;
  positionOffset = 0;
  vpw = $(window).width();
  vph = $(window).height();
    console.log("resizing", vpw, vph);
  $('.splash').css({'height': vph + 'px'});
  $('.splash').css({'width': vpw + 'px'});

  //calculate top margin first
  var tempMargin= vph - vpw/aspectRatio;
  console.log("calced vert:", tempMargin);
  //if the top margin is positive, we need to offset the left side instead
  if(tempMargin > 0){
    tempMargin = vpw - vph*aspectRatio;
    console.log("calced hor:", tempMargin);
    $('.splash__cover').css({'width': vph*aspectRatio + 'px'});
    $('.splash__cover').css({'height': vpw/aspectRatio + 'px'});
    $('.splash__cover').css({'margin-left': (tempMargin) + 'px'});
    $('.splash__cover').css({'margin-top': 0 + 'px'});
  }
  //otherwise offset the top as usual
  else{
    $('.splash__cover').css({'width': vph*aspectRatio + 'px'});
    $('.splash__cover').css({'height': vpw/aspectRatio + 'px'});
    $('.splash__cover').css({'margin-top': (tempMargin) + 'px'});
    $('.splash__cover').css({'margin-left': 0 + 'px'});
  }

}
