var ul = document.getElementById('ul')
var h3 = ul.getElementsByTagName('h3')
var span = ul.getElementsByTagName('span')
var div = ul.getElementsByTagName('div');
var a = ul.getElementsByTagName('a');
var ul2 = document.getElementById('ul2')
var li2 = ul2.getElementsByTagName('li')
var div1 = document.getElementById('div1')
var div2 = document.getElementById('div2')
var div3 = document.getElementById('div3')
var div4 = document.getElementById('div4')
var h31 = document.getElementById('h31')
var h32 = document.getElementById('h32')
var h33 = document.getElementById('h33')
var h34 = document.getElementById('h34')
var span1 = document.getElementById('span1')
var span2 = document.getElementById('span2')
var span3 = document.getElementById('span3')
var span4 = document.getElementById('span4')
for(i=0;i<4;i++){
	h3[i].index = i;
h3[i].onclick = function(){
    for(i=0;i<4;i++){
    	h3[i].className = '';
    	div[i].style.display = 'none';
    	span[i].style.backgroundImage = "URL(img/xiajiantou.png)";
    }
    this.className = 'active';
    div[this.index].style.display = 'block';
    span[this.index].style.backgroundImage = "URL(img/shangjiantou.png)"
}}
for(i=0;i<24;i++){
	a[i].index = i;
	a[i].onclick = function(){
		for(i=0;i<24;i++){
			li2[i].className = '';	
		}
		li2[this.index].className = 'active';
		if(div1.style.display = 'block'){
			div1.style.display = 'none'
		}
		if(div2.style.display = 'block'){
			div2.style.display = 'none'
		}
		if(div3.style.display = 'block'){
			div3.style.display = 'none'
		}
		if(div4.style.display = 'block'){
			div4.style.display = 'none'
		}
		if(span1.style.backgroundImage = "URL(img/shangjiantou.png)"){
			span1.style.backgroundImage = "URL(img/xiajiantou.png)"
		}
		if(span2.style.backgroundImage = "URL(img/shangjiantou.png)"){
			span2.style.backgroundImage = "URL(img/xiajiantou.png)"
		}
		if(span3.style.backgroundImage = "URL(img/shangjiantou.png)"){
			span3.style.backgroundImage = "URL(img/xiajiantou.png)"
		}
		if(span4.style.backgroundImage = "URL(img/shangjiantou.png)"){
			span4.style.backgroundImage = "URL(img/xiajiantou.png)"
		}
		if(h31.className = 'active'){
			h31.className = ''
		}
		if(h32.className = 'active'){
			h32.className = ''
		}
		if(h33.className = 'active'){
			h33.className = ''
		}
		if(h34.className = 'active'){
			h34.className = ''
		}
	}
}