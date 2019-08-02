class Loop{
	constructor(){
		this.ul=document.querySelector('ul');
		this.aLi=document.querySelector('ul li');
		this.oLi=document.querySelectorAll('ol li');
		this.ismousedown=false;
		this.height=1740;
		this.index=0;
		this.sy=0;
		this.y=0;
	}
	init(){
		this.touchEvent();
	}
	touchEvent(){
		var _this=this;
		this.ul.addEventListener("touchstart",function(event){
			_this.ismousedown=true;
			_this.sy=event.touches[0].pageY;
		})
		this.ul.addEventListener("touchmove",function(e){
			if(_this.ismousedown){
				_this.y=e.touches[0].pageY-_this.sy;
				let sy=_this.index*_this.height-_this.y;
				this.style.transform = `translateY(${-sy}px)`;
			}
		})
		this.ul.addEventListener("touchend",function(e){
			_this.ismousedown=false;
			if(Math.abs(_this.y)>_this.height/2){
				if(_this.y<0){
					_this.index++;
					if(_this.index>=4){
						_this.index=4;
					}
				}else{
					_this.index--;
					if(_this.index<=0){
						_this.index=0;
					}
				}
			}
			this.style.transform = `translateY(${-(_this.index*_this.height)}px)`;
			_this.active=document.querySelector('ol li.active');
			_this.active.className="";
			_this.oLi[_this.index].className="active";
		})
	}
}

var loop=new Loop();
loop.init();