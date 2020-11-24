      $(document).ready(function () {


          $('.open_btn').on('click', function () {
              $('.gnb').css('left', '0%')

          })

          $('.close').on('click', function () {
              $('.gnb').css('left', '-60%')
          })







          $('.deth_2').hide();

          $('.gnb_list li').on('click', function (e) {
              e.preventDefault()
              if ($(this).hasClass('on') == true) {

                  $(this).find('.deth_2').slideToggle()

              }


          })




          /*bxslider*/




          var bx = $('.bxslider').bxSlider({
              auto: true,
              autoControls: false,
              stopAutoOnClick: true,
              pager: true,
              controls: false,
              slideWidth: 2000,  
              

          })
/*
          $('.bxslider li img').mouseenter(function () {
              bx.stopAuto()    
             
          })
          $('.bxslider li img').mouseleave(function () {
             
              bx.startAuto()
          })
       */

       



      });

























