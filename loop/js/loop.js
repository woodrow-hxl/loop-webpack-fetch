function Loop(){
	this.ul=document.querySelector('ul');
	this.aLi=document.querySelectorAll('li');
	this.width=600;
	this.index=0;
	this.timer=0;
}
Loop.prototype={
	init(){
		this.play();
	},
	play(){
		var _this=this;
		this.timer=setInterval(function(){
			_this.index++;
			if(_this.index>4){
				_this.index=0;
			}
			_this.ul.style.marginLeft="-"+_this.width*_this.index+"px"
		},1500)
	}
}
var loop=new Loop()
loop.init();