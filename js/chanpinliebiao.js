var liebiao = document.getElementById('liebiao');
var p = liebiao.getElementsByTagName('p');   //3个全部79个
var li = liebiao.getElementsByTagName('li');       //39个大系列(78)79
var xia = document.getElementById('xia');
var quan = xia.getElementsByClassName('one_xia');     //3个全部 78ge79
var daxi = xia.getElementsByClassName('xilie1');    //39个大系列78ge79
var ul = document.getElementsByClassName('ulb');   //78个小系列 79ge
var sul = document.getElementById('sul');
var sli = sul.getElementsByTagName('li');79
var shuru = document.getElementById('shuru');
var button = document.getElementById('button')
var n = 1;
var a = 1;
var shang = document.getElementById('shang');
var xiaye = document.getElementById('xiaye');
for(i=1;i<p.length;i++){
	p[i].index = i;
	p[i].onclick = function(){
		for(i=0;i<p.length;i++){
			p[i].className = '';
			quan[i].style.display = 'none';
			ul[i].style.display = 'none';
			daxi[i].style.display = 'none';
		}
		this.className = 'active';
		quan[this.index].style.display = 'block';
		if([this.index] == 1){
			daxi[14].style.display = 'none';
			ul[27].style.display = 'none';
			daxi[1].style.display = 'block';
			ul[1].style.display = 'block';
			daxi[27].style.display = 'none';
			ul[53].style.display = 'none';
			n=1;a=1;
		}
		if([this.index] == 2){
			daxi[14].style.display = 'block';
			ul[27].style.display = 'block';
			daxi[1].style.display = 'none';
			ul[1].style.display = 'none';
			daxi[27].style.display = 'none';
			ul[53].style.display = 'none';
			n=14;a=27;
		}
		if([this.index] == 3){
			daxi[14].style.display = 'none';
			ul[27].style.display = 'none';
			daxi[1].style.display = 'none';
			ul[1].style.display = 'none';
			daxi[27].style.display = 'block';
			ul[53].style.display = 'block';
			n=27;a=53;
		}
	}
}
for(i=1;i<li.length;i++){
	li[i].index = i;
	li[i].onclick = function(){
		for(i=0;i<li.length;i++){
			ul[i].style.display = 'none';
			daxi[i].style.display ='none';
			ul[i].style.display = 'none';
		}
		if(this.index<=13){
			p[1].className = 'active'
			p[2].className = ''
			p[3].className = ''
			quan[1].style.display = 'block';
			quan[2].style.display = 'none';
			quan[3].style.display = 'none';
		}
		else if(this.index<=26){
			p[1].className = ''
			p[2].className = 'active'
			p[3].className = ''
			quan[1].style.display = 'none';
			quan[2].style.display = 'block';
			quan[3].style.display = 'none';
		}else{
			p[1].className = ''
			p[2].className = ''
			p[3].className = 'active'
			quan[1].style.display = 'none';
			quan[2].style.display = 'none';
			quan[3].style.display = 'block';
		}
		daxi[this.index].style.display = 'block';
		ul[(2*this.index)-1].style.display = 'block';
		 a=(2*this.index)-1;n=this.index;
	}
}
for(i=1;i<sli.length;i++){
	sli[i].index = i;
	sli[i].onclick = function(){
	for(i=0;i<sli.length;i++){
		sli[i].style.backgroundColor = '#FF4400';
		daxi[i].style.display = 'none';
		ul[i].style.display = 'none';
		p[i].className = 'none';
	}
	p[1].className = 'active'
	this.style.backgroundColor = 'blue';
	if(this.index==1){
		quan[1].style.display = 'block';
		daxi[1].style.display = 'block';
		ul[1].style.display = 'block';
		n=1;a=1;
	}
	if(this.index == 2){
		quan[1].style.display = 'block';
		daxi[2].style.display = 'block';
		ul[3].style.display = 'block';
		n=2;a=3;
	}
	if(this.index == 3){
		quan[1].style.display = 'block';
		daxi[3].style.display = 'block';
		ul[5].style.display = 'block';
		n=3;a=5;
	}
	if(this.index == 4){
		quan[1].style.display = 'block';
		daxi[4].style.display = 'block';
		ul[7].style.display = 'block';
		n=4;a=7;
	}
	if(this.index == 5){
		quan[1].style.display = 'block';
		daxi[5].style.display = 'block';
		ul[9].style.display = 'block';
		n=5;a=9;
	}
}}
// n是daxi a是ul

xiaye.onclick = function(){
	a++;
	if(a%2==1){
		n++;
	}
	if(n<=13){
		quan[1].style.display = 'block';
		quan[2].style.display = 'none';
		quan[3].style.display ='none';
	}else if(n<=26){
		quan[2].style.display = 'block';
		quan[1].style.display = 'none';
		quan[3].style.display ='none';
	}else{
		quan[3].style.display = 'block';
		quan[1].style.display = 'none';
		quan[2].style.display ='none';
	}
	
	for(i=1;i<ul.length;i++){
	ul[i].style.display = 'none';
	daxi[i].style.display = 'none';
}
	ul[a].style.display = 'block';
	daxi[n].style.display = 'block';
}
shang.onclick = function(){
	a--;
	if(a%2==0){
		n--;
	}
	if(n<=13){
		quan[1].style.display = 'block';
		quan[2].style.display = 'none';
		quan[3].style.display ='none';
	}else if(n<=26){
		quan[2].style.display = 'block';
		quan[1].style.display = 'none';
		quan[3].style.display ='none';
	}else{
		quan[3].style.display = 'block';
		quan[1].style.display = 'none';
		quan[2].style.display ='none';
	}
	
	for(i=1;i<ul.length;i++){
	ul[i].style.display = 'none';
	daxi[i].style.display = 'none';
}
	ul[a].style.display = 'block';
	daxi[n].style.display = 'block';
}
button.onclick = function(){
	a = shuru.value;
	n = parseInt(a/2);
	if(a%2==1){
		n++;
	}
	alert(n);
	if(n<=13){
		quan[1].style.display = 'block';
		quan[2].style.display = 'none';
		quan[3].style.display ='none';
	}else if(n<=26){
		quan[2].style.display = 'block';
		quan[1].style.display = 'none';
		quan[3].style.display ='none';
	}else{
		quan[3].style.display = 'block';
		quan[1].style.display = 'none';
		quan[2].style.display ='none';
	}
	for(i=0;i<ul.length;i++){
		ul[i].style.display = 'none';
		daxi[i].style.display = 'none';
}
	ul[a].style.display = 'block';
	daxi[n].style.display = 'block';
}
