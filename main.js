var state = 0;
var prev;
function set(str) {
	document.getElementById('frame').setAttribute('src', str);
}
function change(obj){
	event.stopPropagation();
	if(!event.target.classList.contains('activated')){
		if(state == 0){
			prev = obj;
		}else{
			prev.classList.remove('activated');
			prev = obj;
			state=0;
		}
		state++;
		obj.classList.add('activated');
		}
}
