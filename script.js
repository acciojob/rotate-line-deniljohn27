
window.onload=function(){
	var line=document.getElementById()"line";
	var angle=0;
	var speed=1;
	fucntion rotateLine(){
		line.style.transform="rotate(" + angle + "deg)";
		angle+=speed;
		requestAnimationFrame(rotateLine);
	}
	rotateLine();
}