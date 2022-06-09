$(function(){
    var map = new BMap.Map("container");          // 创建地图实例     // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom("北京",15);
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    $(function(){
        getNowPos();
		// getLocal("province="+provinceName);
		
		//省市下拉框查找网点
        /*$("#province").change(function(){
            var provinceName=$(this).val();
            $("#location-name").html("【"+provinceName+"】");
            getLocal("province="+provinceName);
        })*/
		
      //根据门店的名称查找网点
       /* $("span.search-icon").click(function(){
            var content=$("#search_box_input").val();
            if(content==""){
                alert("请输入线下销售网点的信息");
                return false;
            }
            getLocal("content="+content);
        })*/
    });

    //搜索框按键查询
    /*$(document).keyup(function (e) {//捕获文档对象的按键弹起事件
        if (e.keyCode == 13) {//按键信息对象以参数的形式传递进来了
            //此处编写用户敲回车后的代码
            $("span.search-icon").click();
        }
    });*/


    function getNowPos(){
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);//标出所在地
                map.panTo(r.point);//地图中心移动
                var point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
                var gc = new BMap.Geocoder();
                gc.getLocation(point, function(rs){
                    var addComp = rs.addressComponents;
                    $("#location-name").html("【"+addComp['province']+"】");
                    $("#province option[value='"+addComp['province']+"']").attr("selected", true);
                    getLocal("province="+addComp['province']);
                });
            }else {
                alert('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true})
    }

    var marker;
    function getLocal(urlData){
        //Ajax.call('/Marketing2.php?act=getlocal',urlData,returnToCartResponse,'POST', 'TEXT', true, true);
        //function  returnToCartResponse(result){
		    result=[{"id":"515","province":"\u6e56\u5317\u7701","area":"\u5b9c\u660c","shopname":"\u77e5\u6765\u667a\u80fd\u79d1\u6280","shopaddr":"\u6e56\u5317\u7701\u5b9c\u660c\u5e02\u5747\u7476\u5e7f\u573a\u4e00\u697c\u77e5\u6765\u667a\u80fd\u4f53\u9a8c\u9986","location":"111.31098109196,30.732757818026"},{"id":"516","province":"\u6e56\u5317\u7701","area":"\u6b66\u6c49","shopname":"\u6b66\u6c49\u89e3\u653e\u5927\u9053\u4f18\u8da3\u5e97","shopaddr":"\u6e56\u5317\u7701\u6b66\u6c49\u5e02\u6c5f\u6c49\u533a\u89e3\u653e\u5927\u9053557\u53f7\u4e2d\u5c71\u5e7f\u573a1\u697c\u82cf\u5b81\u6613\u8d2d\u4f18\u8da3","location":"114.27613872848,30.587851596764"},{"id":"517","province":"\u6e56\u5317\u7701","area":"\u6b66\u6c49","shopname":"\u6b66\u6c49\u5149\u8c37\u4f18\u8da3\u5e97","shopaddr":"\u6e56\u5317\u7701\u6b66\u6c49\u5e02\u6d2a\u5c71\u533a\u6c11\u9662\u8def\u5149\u8c37\u5e7f\u573a\u8d44\u672c\u5927\u53a6\u8d1f\u4e00\u697c\u82cf\u5b81\u6613\u8d2d","location":"114.40624298256,30.510448272271"},{"id":"518","province":"\u6e56\u5317\u7701","area":"\u8944\u9633","shopname":"\u8d35\u53cb\u7535\u5668\u6709\u9650\u516c\u53f8","shopaddr":"\u6e56\u5317\u7701\u8944\u9633\u5e02\u6a0a\u57ce\u533a\u6625\u5143\u8def8\u53f7\u73b0\u4ee3\u57ce\u6570\u7801\u6e2f\u4e00\u697c1038\u53f7","location":"112.14366834884,32.058976142962"},{"id":"519","province":"\u6e56\u5317\u7701","area":"\u5341\u5830","shopname":"\u9f0e\u5174\u6295\u5f71\u79d1\u6280\u6709\u9650\u516c\u53f8","shopaddr":"\u6e56\u5317\u7701\u5341\u5830\u5e02\u5f20\u6e7e\u533a\u516d\u5830\u6cf0\u5f18\u7535\u8111\u57ce\u4e8c\u697cA\u533a45\u53f7","location":"110.7906542215,32.661244015944"},{"id":"520","province":"\u6e56\u5317\u7701","area":"\u6069\u65bd","shopname":"\u5dde\u987a\u5174\u8fbe\u7535\u8111\u6709\u9650\u516c\u53f8","shopaddr":"\u6e56\u5317\u7701\u6069\u65bd\u5dde\u56fd\u6cf0\u5927\u53a62\u697c\u987a\u8fbe\u7535\u8111","location":"109.4926968993,30.278629959823"},{"id":"521","province":"\u6e56\u5317\u7701","area":"\u8346\u5dde","shopname":"\u767e\u4fe1\u7535\u8111","shopaddr":"\u6e56\u5317\u7701\u8346\u5dde\u5e02\u6c99\u5e02\u533a\u7ea2\u95e8\u8def\u98de\u817e\u6570\u7801\u5e7f\u573a\u4e8c\u697c2008\u53f7\uff08\u8346\u5dde\u767e\u4fe1\u7535\u8111\uff09","location":"112.26757444672,30.312061976048"},{"id":"522","province":"\u6e56\u5317\u7701","area":"\u76d1\u5229","shopname":"\u8bba\u7c73\u667a\u6167\u5c45\u5bb6\u751f\u6d3b\u9986","shopaddr":"\u6e56\u5317\u7701\u8346\u5dde\u5e02\u76d1\u5229\u767e\u665f\u5e7f\u573a\u4e8c\u697c296\u53f7","location":"113.0019564425,29.848933249111"}];
            result1=eval(result); 		
            reg=eval(result); 
            if(reg.length<1){
                $("#store-list").children().remove();
                $("#store-list").append("<div style='text-align: center;line-height: 50px;'>暂无搜索的网点</div>");
                return false;
            }
            var storeList="";
            $("#store-num").html(reg.length);
            map.clearOverlays();
            var pointsView = [];
            for(var i=0;i<reg.length;i++){
                var n=i+1;
                var p= reg[i]['location'].split(',');
                var point = new BMap.Point(p[0],p[1]);
                pointsView.push(point);
				
                var content ="<p style='font-weight:600'>"+reg[i].shopname+"</p><p style='line-height: 20px;'>地址："+reg[i].shopaddr+"</p>";
                var myIcon = new BMap.Icon("bd1.png", new BMap.Size(21, 33), {
                    offset: new BMap.Size(10, 25), // 指定定位位置
                });
                var  marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注
                var label = new BMap.Label(n,{
                    offset : new BMap.Size(0,3)
                });
                label.setStyle({
                    width:'21px',background:'none',color:'#fff',border:'none',textAlign:'center'//只要对label样式进行设置就可达到在标注图标上显示数字的效果
                });
                marker.setLabel(label);//显示地理名称 a
                map.addOverlay(marker);
                addClickHandler(content,marker);
				
                storeList+='<li onclick="to(this,'+i+','+p[0]+','+p[1]+',\''+reg[i].shopname+'\',\''+reg[i].shopaddr+'\')"><span class="location-num">'+n+'</span><div class="location-addr">'
                +'<h3>'+reg[i].shopname+'</h3> <p class="addr-info">'+reg[i].shopaddr+'</p></div>'
                +'</li>';
            }
            //让所有点在视野范围内
            map.setViewport(pointsView);
            $("#store-list").children().remove();
            $("#store-list").append(storeList);
       // }
    }

    var opts = {
        width : 250,     // 信息窗口宽度
        height: 50,     // 信息窗口高度
        title : "" , // 信息窗口标题
        enableMessage:true//设置允许信息窗发送短息
    };


    //点击将信息内容加入白标注中
    function addClickHandler(content,marker){
        marker.addEventListener("click",function(e){
                    marker.setAnimation(null);
                    openInfo(content,e);
                }
        );
    }

    function openInfo(content,e){
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    }

    //移动到某一坐标点
    function to(obj,i,x,y,shopname,shopaddr){
        var allOverlay = map.getOverlays();
        var last=allOverlay.length-1;
        map.removeOverlay(allOverlay[last]);
        $(obj).addClass("addMove");
        $(obj).siblings().removeClass("addMove");
        var point=new BMap.Point(x,y);
        map.centerAndZoom(point,15);
        var myIcon = new BMap.Icon("bd2.png", new BMap.Size(21, 33), {
            offset: new BMap.Size(10, 25), // 指定定位位置
        });
        var  marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注
        var n=i+1;
        var label = new BMap.Label(n,{
            offset : new BMap.Size(0,3)
        });
        label.setStyle({
            width:'21px',background:'none',color:'#fff',border:'none',textAlign:'center'//只要对label样式进行设置就可达到在标注图标上显示数字的效果
        });
        marker.setLabel(label);//显示地理名称 a
        map.addOverlay(marker);
        var content ="<p style='font-weight:600'>"+shopname+"</p><p style='line-height: 20px;'>地址："+shopaddr+"</p>";
        addClickHandler(content,marker);
    }
})