

function rolling(){
    menuNum++;
    if(menuNum>1){
        
        menuNum=0; 
    }
    selectMenu(menuNum)
}



function selectMenu(num){

if(currentnum!=num){

    spanList[currentnum].getElementsByTagName('a')[0].className="";
    spanList[num].getElementsByTagName('a')[0].className="on";
    
    liList[currentnum].className="off"
    liList[num].className=""
    

    
    currentnum=num
    
}    
    
    
}





/*현재보고있는*/
var currentnum=0; 

var menuNum=0; 

/*이미지 li*/
var liList; 

/*버튼*/
var spanList; 

var sid;




function init(){
    
    liList=document.getElementsByClassName('visual')[0].getElementsByTagName('li');
    
    spanList=document.getElementsByClassName('visual_btn')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
    

    
    for(var i=0; i<spanList.length; i++){
        spanList[i].getElementsByTagName('a')[0].num=i
       spanList[i].getElementsByTagName('a')[0].onmouseover=function(){
  
        menuNum=this.num   
           
         selectMenu(menuNum) 
           
        clearInterval(sid)   
        
       } 
       
       spanList[i].getElementsByTagName('a')[0].num=i
       spanList[i].getElementsByTagName('a')[0].onmouseout=function(){
           
        clearInterval(sid)  
           sid=setInterval(rolling,3000)
        
       }
   
        
       }
 
    
    
    
    
    
    
    sid=setInterval(rolling,3000)
    
    
    
    
    
    
    
    
    
}






window.onload=init; 




    
       /*좌우 버튼 클릭시 메뉴 변경*/        
        $(document).ready(function(){

            $('.visual_btn_left').on('click',function(){
              
            $('.select_wrap .on').append($('.select_wrap .on>li:first'))       
            })
           
             $('.visual_btn_right').on('click',function(){
              
            $('.select_wrap .on').prepend($('.select_wrap .on>li:last'))  
       
            })
           
            
              /*메뉴에 마우스 올릴시 배경이미지 노란색 변경*/
           
         $('.selectProduct >li').each(function(){   
             $('.selectProduct> li>a').on('mouseenter',function(){
          
              var num=$(this).parent().index() 
           
            $(this).css({'background':'URL(img/prductIcon_'+(num+1)+'_on.png) no-repeat center 10px'})
             })
            
               $('.selectProduct>li>a').on('mouseleave',function(){
            
           var num=$(this).parent().index() 
        
           $(this).css({'background':'URL(img/prductIcon_'+(num+1)+'.png) no-repeat center 10px'})
             })
   
             
                    /* 메뉴 클릭시 변경*/
      
            
            $('.select> a').on('click',function(e){
                e.preventDefault();
            
            var num=$(this).parent().index()   
             
                     
                $('.select').find('div > ul').removeClass();
                $('.select').eq(num).find('div > ul').addClass('on');
                
                
                $('.select').find('div > ul > li').css({
                    'z-index':1
                    
                })
             
                
                
            })  
              
                   
        
             
             
         })
            
            
            
   
            
          
            
            /*매장찾기 searchbar 축소확대*/
                 
            $('.schBtn').on('mouseenter',function(){
               
            $('.input_text').css('width',400)    
             
            
            
            })
            
             $('.input_text').on('mouseenter',function(){
               
            $('.input_text').css('width',400)    
             
            
            
            })
            
            
            
    
               $('.schBtn').on('mouseleave',function(){
               
            $('.input_text').css('width',40)    
             
            
            
            })
            
    
            
               $('.input_text').on('mouseleave',function(){
               
            $('.input_text').css('width',40)    
             
            
            
            })
            
    
            
      
            
            
            
            
            
            
            
            
            
            
            
        })






