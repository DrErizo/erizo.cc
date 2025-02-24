function filter(){
	let posts = document.querySelectorAll(".entry");
	if(event.target.id == "fiction"){
			posts.forEach((el)=>{
				if(el.getAttribute("value") == "webblog"){
					el.parentNode.classList.add("invisible");
				}else{
					el.parentNode.classList.remove("invisible");
				}
			});
	}else if(event.target.id == "life"){
			posts.forEach((el)=>{
				if(el.getAttribute("value") == "flash-fiction"){
					el.parentNode.classList.add("invisible");
				}else{
					el.parentNode.classList.remove("invisible");
				}
			});
	}
};
document.getElementById("life").addEventListener("click",filter)
document.getElementById("fiction").addEventListener("click",filter)

document.getElementById("life").click();
