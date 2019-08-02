class Loop{
	constructor(){
		this.ul=document.querySelector('ul');
		this.aLi=document.querySelectorAll('ul li');
		this.oLi=document.querySelectorAll('ol li');
		this.width=600;
		this.index=0;
		this.timer=0;
	}
	init(){
		this.play();
	}
	play(){
		this.timer=setInterval(()=>{
			for(let i=0;i<this.aLi.length;i++){
				this.aLi[i].style.display="none";
			}
			for(let i=0;i<this.oLi.length;i++){
				this.oLi[i].className="";
			}
			this.index++;
			if(this.index>4){
				this.index=0;
			}
			this.oLi[this.index].className="active";
			this.aLi[this.index].style.display="block";
		},1500)
	}
}
var loop=new Loop();
loop.init();