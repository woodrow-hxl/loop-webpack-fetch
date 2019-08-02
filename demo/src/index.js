import './scss/style.scss';
import fetch from 'cross-fetch';
import './demo';

var timer=0;
var index=0;
var app=document.querySelector('#app');
var p=document.createElement('p');
p.classList="box";
app.appendChild(p)

fetch('/api/mydata').then(res=>{
	return res.json();
}).then(data=>{
	console.log(data);
	timer=setInterval(()=>{
		
		p.style.backgroundColor=data[index];
		if(index>=5){
			p.style.backgroundColor=data[0];
			index=0;
		}
		index++;
	},1000)
})
