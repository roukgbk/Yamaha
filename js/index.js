window.onload = function(){
    var c1_o1 = document.getElementById("c1_o1");
    var c1_o2 = document.getElementById("c1_o2");
    var c1_o3 = document.getElementById("c1_o3");
    var c1_o4 = document.getElementById("c1_o4");

    var c1_l1 = c1_o1.getElementsByTagName("li");
    var c1_l2 = c1_o2.getElementsByTagName("li");
    var c1_l3 = c1_o3.getElementsByTagName("li");
    var c1_l4 = c1_o4.getElementsByTagName("li");

    c1_o1.style.width = c1_l1.length*100+"%";
    c1_o2.style.width = c1_l2.length*100+"%";
    c1_o3.style.width = c1_l3.length*100+"%";
    c1_o4.style.width = c1_l4.length*100+"%";

    var ce1_back = document.getElementById("ce1_back");
    var ce1_next = document.getElementById("ce1_next");

    var kz=1;
    ce1_next.onclick = function(){
        if(kz==1){

            if(c1_o1.offsetLeft-390<=-c1_o1.offsetWidth){
                c1_o1.style.left = "0";
                kz=0
            }else{
                c1_o1.style.left = c1_o1.offsetLeft-390+"px";
                kz=0
            }

            if(c1_o2.offsetLeft-390<=-c1_o2.offsetWidth){
                c1_o2.style.left = "0";
                kz=0
            }else{
                c1_o2.style.left = c1_o2.offsetLeft-390+"px";
                kz=0
            }

            if(c1_o3.offsetLeft-390<=-c1_o3.offsetWidth){
                c1_o3.style.left = "0";
                kz=0
            }else{
                c1_o3.style.left = c1_o3.offsetLeft-390+"px";
                kz=0
            }

            if(c1_o4.offsetLeft-390<=-c1_o4.offsetWidth){
                c1_o4.style.left = "0";
                kz=0
            }else{
                c1_o4.style.left = c1_o4.offsetLeft-390+"px";
                kz=0
            }

            setTimeout(function(){
                kz=1;
            },360)
        }
        
    }


    ce1_back.onclick = function(){
        if(kz==1){

            if(c1_o1.offsetLeft+390>0){
                c1_o1.style.left = -c1_o1.offsetWidth+390+"px";
                kz=0
            }else{
                c1_o1.style.left = c1_o1.offsetLeft+390+"px";
                kz=0
            }

            if(c1_o2.offsetLeft+390>0){
                c1_o2.style.left = -c1_o2.offsetWidth+390+"px";
                kz=0
            }else{
                c1_o2.style.left = c1_o2.offsetLeft+390+"px";
                kz=0
            }

            if(c1_o3.offsetLeft+390>0){
                c1_o3.style.left = -c1_o3.offsetWidth+390+"px";
                kz=0
            }else{
                c1_o3.style.left = c1_o3.offsetLeft+390+"px";
                kz=0
            }

            if(c1_o4.offsetLeft+390>0){
                c1_o4.style.left = -c1_o4.offsetWidth+390+"px";
                kz=0
            }else{
                c1_o4.style.left = c1_o4.offsetLeft+390+"px";
                kz=0
            }

            setTimeout(function(){
                kz=1;
            },360)
        }
        
    }


        var oTop = document.getElementById("to_top");
        var screenw = document.documentElement.clientWidth || document.body.clientWidth;
        var screenh = document.documentElement.clientHeight || document.body.clientHeight;
        oTop.style.left = screenw - oTop.offsetWidth +"px";
        oTop.style.top = screenh - oTop.offsetHeight + "px";
        window.onscroll = function(){
          var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
          oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
        }
        oTop.onclick = function(){
          document.documentElement.scrollTop = document.body.scrollTop =0;
        }
}