$('#nav li').hover(function(){
	var eve=$(this).index()
	$(this).addClass('current');
    $(this).siblings().removeClass('current');
	$('.navli').eq(eve).slideDown(500);
},function() {
	
    $('.navli').slideUp(0);
    $(this).removeClass('current');
//  $('.navli').stop();
   });

$('.navli').hover(function(){
	var eve=$(this).index()
	$(this).addClass('currentt');
    $(this).siblings().removeClass('currentt');
	$('.navli').eq(eve).slideDown(0)
},function() {
    $('.navli').slideUp();
});

//时间
   var starttime = new Date("9999-10-01 22:00:00");
  setInterval(function () {
    var nowtime = new Date();
    var time = starttime - nowtime;
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);
    $('.hhh').html(hour);
    $('.mmm').html(minute);
    $('.sss').html(seconds);
  }, 1000);

//小米闪购轮播
var num=0;
$('.sgright').click(function(){
	num++;
	if(num>1){
		num=1;
	}
	$('.xmshangourightlbt').animate({'left':-num*975+'px'},500);
})
$('.sgleft').click(function(){
	num--;
	if(num<0){
		num=0;
	}
	$('.xmshangourightlbt').animate({'left':num*975+'px'},500);
})

//选项卡
        $('.xuanxk li').mouseenter(function(event) {
            var index=$(this).index();
            // ol li
            $(this).addClass('current');
            $(this).siblings().removeClass('current');


             // $('ul li').eq(index).css('z-index', num++);
            $('.xxksp>li').eq(index).fadeIn(800)
             $('.xxksp>li').eq(index).siblings().fadeOut(100)
        });

//选项卡2
        $('.xuanxktwo li').mouseenter(function(event) {
            var index=$(this).index();
            // ol li
            $(this).addClass('current');
            $(this).siblings().removeClass('current');


             // $('ul li').eq(index).css('z-index', num++);
            $('.xxksptwo>li').eq(index).fadeIn(800)
             $('.xxksptwo>li').eq(index).siblings().fadeOut(100)
        });
//选项卡3
        $('.xuanxktree li').mouseenter(function(event) {
            var index=$(this).index();
            // ol li
            $(this).addClass('current');
            $(this).siblings().removeClass('current');


             // $('ul li').eq(index).css('z-index', num++);
            $('.xxksptree>li').eq(index).fadeIn(800)
             $('.xxksptree>li').eq(index).siblings().fadeOut(100)
        });
//选项卡4
        $('.xuanxkfour li').mouseenter(function(event) {
            var index=$(this).index();
            // ol li
            $(this).addClass('current');
            $(this).siblings().removeClass('current');


             // $('ul li').eq(index).css('z-index', num++);
            $('.xxkspfour>li').eq(index).fadeIn(800)
             $('.xxkspfour>li').eq(index).siblings().fadeOut(100)
        });
 //选项卡5
        $('.xuanxkfive li').mouseenter(function(event) {
            var index=$(this).index();
            // ol li
            $(this).addClass('current');
            $(this).siblings().removeClass('current');


             // $('ul li').eq(index).css('z-index', num++);
            $('.xxkspfive>li').eq(index).fadeIn(800)
             $('.xxkspfive>li').eq(index).siblings().fadeOut(100)
        });
        //为你推荐
var num=0;
$('.wnright').click(function(){
	num++;
	if(num>1){
		num=1;
	}
	$('.weinituijianlbt').animate({'left':-num*1226+'px'},500);
})
$('.wnleft').click(function(){
	num--;
	if(num<0){
		num=0;
	}
	$('.weinituijianlbt').animate({'left':num*1226+'px'},500);
})
//内容1
    		var num
			var num=0;
			$('.lefto').click(function(){
				num++;
				if(num>0){
					num=-2;
				}
				$('.boxnro').css('left',num*296+'px');
				 $('.listnro li').eq(-num).addClass('currents');
                $('.listnro li').eq(-num).siblings().removeClass('currents');
			})
			 $('.righto').click(function(){
				num--;
				if(num<-2){
					num=0;
				}
				$('.boxnro').css('left',num*296+'px');
				 $('.listnro li').eq(-num).addClass('currents');
                $('.listnro li').eq(-num).siblings().removeClass('currents');
			})
			 $('.listnro li').click(function(){
			 	arr=$(this).index();
			 	$('.boxnro').css('left',-arr*296+'px');
			 	$(this).addClass('currents');
                $(this).siblings().removeClass('currents');
			 })
//内容2
    		var num
			var num=0;
			$('.lefttwo').click(function(){
				num++;
				if(num>0){
					num=-3;
				}
				$('.boxnrtwo').css('left',num*296+'px');
				 $('.listnrtwo li').eq(-num).addClass('currents');
                $('.listnrtwo li').eq(-num).siblings().removeClass('currents');
			})
			 $('.righttwo').click(function(){
				num--;
				if(num<-3){
					num=0;
				}
				$('.boxnrtwo').css('left',num*296+'px');
				 $('.listnrtwo li').eq(-num).addClass('currents');
                $('.listnrtwo li').eq(-num).siblings().removeClass('currents');
			})
			 $('.listnrtwo li').click(function(){
			 	arr=$(this).index();
			 	$('.boxnrtwo').css('left',-arr*296+'px');
			 	$(this).addClass('currents');
                $(this).siblings().removeClass('currents');
			 })
			 //内容3
    		var num
			var num=0;
			$('.lefttree').click(function(){
				num++;
				if(num>0){
					num=-3;
				}
				$('.boxnrtree').css('left',num*296+'px');
				 $('.listnrtree li').eq(-num).addClass('currents');
                $('.listnrtree li').eq(-num).siblings().removeClass('currents');
			})
			 $('.righttree').click(function(){
				num--;
				if(num<-3){
					num=0;
				}
				$('.boxnrtree').css('left',num*296+'px');
				 $('.listnrtree li').eq(-num).addClass('currents');
                $('.listnrtree li').eq(-num).siblings().removeClass('currents');
			})
			 $('.listnrtree li').click(function(){
			 	arr=$(this).index();
			 	$('.boxnrtree').css('left',-arr*296+'px');
			 	$(this).addClass('currents');
                $(this).siblings().removeClass('currents');
			 })
			 //内容4
    		var num
			var num=0;
			$('.leftfour').click(function(){
				num++;
				if(num>0){
					num=-3;
				}
				$('.boxnrfour').css('left',num*296+'px');
				 $('.listnrfour li').eq(-num).addClass('currents');
                $('.listnrfour li').eq(-num).siblings().removeClass('currents');
			})
			 $('.rightfour').click(function(){
				num--;
				if(num<-3){
					num=0;
				}
				$('.boxnrfour').css('left',num*296+'px');
				 $('.listnrfour li').eq(-num).addClass('currents');
                $('.listnrfour li').eq(-num).siblings().removeClass('currents');
			})
			 $('.listnrfour li').click(function(){
			 	arr=$(this).index();
			 	$('.boxnrfour').css('left',-arr*296+'px');
			 	$(this).addClass('currents');
                $(this).siblings().removeClass('currents');
			 })
			 //视频1
			 



$('.shipinbox  li').click(function(){
	var index=$(this).index();
	$('.Popupvideo li').eq(index).fadeToggle()//切换
//	 $('.Popupvideo li').eq(index).addClass('videoshow');
//   $('.Popupvideo li').eq(index).siblings().removeClass('videoshow');  
})
$('.oclose').click(function(){
	$('.Popupvideo li').css('display','none');//隐藏
   $('video').trigger('pause');//关闭视频
})


//固定栏
			$(window).scroll(function(){
				var st=$(window).scrollTop();
				var wh=$(window).height()
				if(st>=wh){
					$('.fieldTop').fadeIn()
				}else{
					$('.fieldTop').fadeOut()
				}

			})
			$('.fieldTop').click(function(event) {
				$('html,body').animate({'scrollTop':'0px'},1000)
			});












