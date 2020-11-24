

$(document).ready(function(){
     
           
   {
  // 1024px 이상에서 사용할 JavaScript
               
     $('.gnb .deth1').on('click',function(){
        
        $('.gnb .deth1 ul').slideToggle();
        
        $('.navBg').slideToggle();
     })         
} 

  if (matchMedia("screen and (min-width: 415px)").matches){
  // 1024px 미만에서 사용할 JavaScript   
    
    $('.mgnb .deth1 a').on('click',function(e){
        e.preventDefault()
    if($(this).next().css('display')=='none'){
    $('.mgnb .deth1 ul').slideUp()
    } $(this).next().slideToggle()
        
    }) 
    
    $('.btnGnb').on('click',function(){
      if($(this).hasClass('on')==false){
        $('.mgnb').css('left','0%')
        $(this).addClass('on')  
      }else{ 
        $(this).removeClass('on')
        $('.mgnb').css('left','-50%')
            }  
    })
}else if(matchMedia("screen and (max-width: 415px)").matches){
  // 414px 미만에서 사용할 JavaScript   
    
    $('.mgnb .deth1 a').on('click',function(e){
        e.preventDefault()
    if($(this).next().css('display')=='none'){
    $('.mgnb .deth1 ul').slideUp()
    } $(this).next().slideToggle()
        
    }) 
    
    $('.btnGnb').on('click',function(){
      if($(this).hasClass('on')==false){
        $('.mgnb').css('left','0%')
        $(this).addClass('on')  
      }else{ 
        $(this).removeClass('on')
        $('.mgnb').css('left','-100%')
            }  
    })

          $('.bxslider').bxSlider({
                      auto: true,
                      autoControls: false,
                    stopAutoOnClick: false,
                      pager: false,
                     controls:false,
                      maxSlider:1
                })
    
    
    

      }
})

















































