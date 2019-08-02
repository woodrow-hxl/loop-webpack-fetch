let box=document.createElement('div');
document.body.appendChild(box);
let input=document.createElement('input');
box.appendChild(input);
let btn=document.createElement('button');
box.appendChild(btn);
btn.innerHTML="search";
let content=document.createElement('div');
document.body.appendChild(content);


function getApi(search){
	return `https://api.github.com/search/repositories?q=${search}&sort=stars`;
	// return `/search/repositories?p=${search}&sort=start`;
}

btn.onclick=()=>{
	var val=input.value.trim();
	if(val){
		let url=getApi(val);
		getData(url);
	}
}

function getData(url){
	fetch(url).then(res=>{
		if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
	}).then(data=>{
		createResult(data.items);
	})
}

function createResult(itemsArr){
	let list="";
	for(let i=0;i<itemsArr.length;i++){
		let item=itemsArr[i];
		let str=`
		<div>
			<a href="${item.html_url}">${item.full_name}</a>
			<p>${item.description}</p>
		</div>
		`
		list+=str;
	}
	content.innerHTML=list;
}