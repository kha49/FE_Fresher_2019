const reveal = {
  init: () => {
        // if((obj!=0||obj!=201)){
            reveal.animation();
            if(obj=210){

            }
        // }
  },
  animation: ()=> {
    $(window).on('scroll', function(){
        var obj = Math.round($(window).scrollTop()/ $(window).height()*100); //obj=201
        var opacity = 0.8 + obj*0.001;
    //  $('.develop').css('opacity', opacity);
         $('.develop').css('transform', 'translateX('+(obj-210)+'px)');  
         $('.develop').css('opacity', opacity);
  });
}
       
}

export default reveal;