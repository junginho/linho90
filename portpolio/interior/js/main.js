var num;

function contMv() {
    num++
    if (num > 3) num = 0;
    $('.visualNum > li > span > a').eq(num).click()
    changeItem(num)
}


var contAuto = setInterval(contMv, 3000)


  function changeItem(num){
      
      $('.visualBanner> ul> li').stop().fadeOut(1000)
      $('.visualBanner> ul> li').eq(num).fadeIn(800)    
      
  }




$(document).ready(function () {

    /*mainvisualAuto*/
    
    $('.youtube').colorbox({
        iframe: true,
        innerWidth: '80%',
        innerHeight: '80%'

    })



    num = 0;
    aSize = $('.visualNum  li').length;

    $('.visualNum li:gt(0)>div').hide()
    $('.visualNum').on({
        mouseenter: function () {
            clearInterval(contAuto)
        },
        mouseleave: function () {
            clearInterval(contAuto)
            contAuto = setInterval(contMv, 3000)
        }

    })



    $('.visualNum>li>span>a').on('click', function () {

        $('.visualNum  div').slideUp();
        $(this).parent().next().slideDown('nomal')


        $('.visualNum > li > span >a >img').each(function () {

    $(this).attr('src', $(this).attr('src').replace('_on.png', '.png'))
        })

        var myBtn = $(this).children('img');

        myBtn.attr('src', myBtn.attr('src').replace('.png', '_on.png'))
        num = $(this).parent().parent().index();

        
       $('.visualBanner>ul>li>a>img').each(function(){
           
           
       }) 
        
        
    })
/* gnb slide*/
    
    $('.deth1 a').on({
        
        mouseenter:function(){
        $(this).parent().find('.deth2').stop().slideDown()},
        mouseleave:function(){
        $(this).parent().find('.deth2').stop().slideUp()}
        
    })
    
    $('.deth2 li').on({
        
        mouseenter:function(){
        $(this).parent('.deth2').stop().slideDown()},
        mouseleave:function(){
        $(this).parent('.deth2').stop().slideUp()}
        
    })
    
    
    /* scrollmoving*/
    
    
    var best =$('.bestWrap')
    var interiorWrap=$('.interiorWrap').offset().top
        
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop()
        var scrollpose=$(window).scrollTop()
       if(wScroll>=best.offset().top-$(window).height()/3){
           
           $('.product_title h3 span').each(function(i){
               setTimeout(function(){
                $('.product_title h3 span').eq(i).addClass('show')   
                   
               },100*(i+1))
           })
       }else{
              $('.product_title h3 span').each(function(i){
               setTimeout(function(){
                $('.product_title h3 span').eq(i).removeClass('show')   
                   
               },100*(i+1))
           })
           
           
       }
        
    /*interiorWrap */    
        
       if(scrollpose>interiorWrap-($(window).height()/3)){
           $('.interior li:eq(0)').css({
               opacity:'1',
               transition:'all 2s ease',
               transitionDelay:'0.1s'
               
           })   
           $('.interior li:eq(1)').css({
               opacity:'1',
               transition:'all 2s ease',
               transitionDelay:'0.3s'
               
           })           
           $('.interior li:eq(2)').css({
               opacity:'1',
               transition:'all 2s ease',
               transitionDelay:'0.5s'
               
           })           
           $('.interior li:eq(3)').css({
               opacity:'1',
               transition:'all 2s ease',
               transitionDelay:'0.7s'
               
           })           
           $('.interior li:eq(4)').css({
               opacity:'1',
               transition:'all 2s ease',
               transitionDelay:'0.9s'
               
           })          
           $('.interior li:eq(5)').css({
               opacity:'1',
               transition:'all 2s ease',
               transitionDelay:'1.1s'
               
           })
       } else{
            $('.interior li').css({
               opacity:'0'
           })      
       }
     
 
        
        
    })
    
    /*productanimate*/
    
   $('.product').on({
       
       mouseenter:function(){
        $(this).find('.layer').stop().animate({top:0},800) 
       },     
       mouseleave:function(){ 
     $(this).find('.layer').stop().animate({top:300},500)
       }   
   }) 
    
    
    $('.bestWrap2').on({
        mouseenter:function(){
            $('.productWrap').mousemove(function(event){
                var pageCord=event.pageX-$('div').offset().left;
                if(pageCord>1350){
                    $('.productrightBtn').css('display','block');
                    $('.productleftBtn').css('display','none');   
                }else{
                    $('.productleftBtn').css('display','block');
                    $('.productrightBtn').css('display','none');
                }
                
            })
        },
        
         mouseleave:function(){
             $('.productrightBtn').css('display','none');
             $('.productleftBtn').css('display','none');
            } 
        
    })
    
    
      $('.productleftBtn').on('click',function(e){
          e.preventDefault()
          $('.productWrap').append($('.productWrap>div:first'))
      })
                       
          
      $('.productrightBtn').on('click',function(e){
          e.preventDefault()
          $('.productWrap').prepend($('.productWrap>div:last'))
      })
                       
        
/*epilogueWrap*/

    
        $('.epilogueText li').hide()
    $('.epilogueText li.on').show()
    $('.epilogueImg li').hide()
    $('.epilogueImg li.on').show()
    
    
  $('.lineBtn2').on('click',function(e){
      e.preventDefault();
      if($('.epilogueImg li.on').is(':animated')==false){
      
      var currentNum=$('.epilogueImg li.on').index()
      var num=currentNum+1; 
     
      if(num>$('.epilogueImg li').length-1){
          num=0; 
      }
      $('.epilogueImg li:eq('+num+')').show()
      $('.epilogueImg li:eq('+num+')').css('left','780px')
      $('.epilogueImg li.on').animate({ 
      left:'-780px'
      },1000,function(){
          $(this).removeClass('on')
          $(this).hide()
          
      })    
      $('.epilogueImg li:eq('+num+')').animate({ 
      left:'0px'
      },1000,function(){
          $(this).addClass('on') 
          
      })
      
      
      
      
      
      }
      
       if($('.epilogueText li.on').is(':animated')==false){
      
      var currentNum=$('.epilogueImg li.on').index()
      var num=currentNum+1; 
     
      if(num>$('.epilogueImg li').length-1){
          num=0; 
      }
      $('.epilogueText li:eq('+num+')').show()
      $('.epilogueText li:eq('+num+')').css('left','1140px')
      $('.epilogueText li.on').animate({ 
      left:'-1140px'
      },1000,function(){
          $(this).removeClass('on')
          $(this).hide()
          
      })    
      $('.epilogueText li:eq('+num+')').animate({ 
      left:'0px'
      },1000,function(){
          $(this).addClass('on') 
          
      })
      
      
      
      
      
      }
      
      
      
      
  })  
    
     $('.lineBtn').on('click',function(e){
      e.preventDefault();
      if($('.epilogueImg li.on').is(':animated')==false){
      
      var currentNum=$('.epilogueImg li.on').index()
      var num=currentNum-1; 
     
      if(num<0){
          num=$('.epilogueImg li').length-1
      }
      $('.epilogueImg li:eq('+num+')').show()
      $('.epilogueImg li:eq('+num+')').css('left','780px')
      $('.epilogueImg li.on').animate({ 
      left:'-780px'
      },1000,function(){
          $(this).removeClass('on')
          $(this).hide()
          
      })    
      $('.epilogueImg li:eq('+num+')').animate({ 
      left:'0px'
      },1000,function(){
          $(this).addClass('on') 
          
      })
      
      
      
      
      
      }
      
       if($('.epilogueText li.on').is(':animated')==false){
      
      var currentNum=$('.epilogueImg li.on').index()
      var num=currentNum-1; 
     
      if(num<0){
          num=$('.epilogueImg li').length-1 
      }
      $('.epilogueText li:eq('+num+')').show()
      $('.epilogueText li:eq('+num+')').css('left','1140px')
      $('.epilogueText li.on').animate({ 
      left:'-1140px'
      },1000,function(){
          $(this).removeClass('on')
          $(this).hide()
          
      })    
      $('.epilogueText li:eq('+num+')').animate({ 
      left:'0px'
      },1000,function(){
          $(this).addClass('on') 
          
      })
      
      
      
      
      
      }
      
      
      
      
  })  
    
  
})



















