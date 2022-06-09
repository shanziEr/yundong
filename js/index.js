var $circlesLis = $("#circles li");
		var $unit = $("#unit");
        console.log( $unit)
		var $carousel = $("#carousel");
        console.log($carousel)
		var amount =$unit.children("li").length;
        console.log( amount)
        $unit.children("li:first").clone().appendTo($unit);
        console.log( $unit.children("li:first").clone().appendTo($unit))
        var $leftBtn = $("#leftBtn");
		var $rightBtn = $("#rightBtn");
        //定时器
        var timer = setInterval(rightBtnHandler,2000);
		$carousel.mouseenter(function(){clearInterval(timer);});
		$carousel.mouseleave(function(){clearInterval(timer);timer = setInterval(rightBtnHandler,2000);});
        var idx=0

     
        $rightBtn.click(rightBtnHandler);
		function rightBtnHandler(){
		
			if($unit.is(":animated")){
				return;
			}

		
			idx++;
			$unit.animate({"left":idx * -1920},400,function(){
				if(idx > amount - 1){
					idx = 0;
					$unit.css("left",0);  
				}
			});
			//小圆点
			var i = idx <= amount - 1 ? idx : 0;
			$circlesLis.eq(i).addClass("cur").siblings().removeClass("cur");
		}

	
		$leftBtn.click(function(){
			//防止流氓
			if($unit.is(":animated")){
				return;
			}
			//先判断，先瞬移
			idx --;
			if(idx < 0){
				idx = amount - 1;
				$unit.css("left",amount * -1920);
			}
			
			//然后拉动
			$unit.animate({"left":idx * -1920},400);

			//小圆点
			$circlesLis.eq(idx).addClass("cur").siblings().removeClass("cur");
		});

        
		$circlesLis.mouseenter(function(){
			idx = $(this).index();
			$unit.stop(true).animate({"left":idx * -1920},400);
			$circlesLis.eq(idx).addClass("cur").siblings().removeClass("cur");
		})
      