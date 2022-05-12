function seizure() {
	
	var links = document.getElementsByClassName("linkanim");
	
	for (i = 0; i < links.length; i++) {
		document.getElementsByClassName("linkanim")[i].style.animationDuration = "300ms";
	}	
	document.getElementById("hellscape").style.animationDuration = "300ms";
	document.getElementById("logo").style.animationDuration = "300ms";

	document.getElementById("button1").innerHTML = "wish granted";
	document.getElementById("button2").innerHTML = "nevermind i'm sorry please stop it";
}

function noseizure() {
	
	var links = document.getElementsByClassName("linkanim");
	
	for (i = 0; i < links.length; i++) {
		document.getElementsByClassName("linkanim")[i].style.animationDuration = "16s"
	}	
	document.getElementById("hellscape").style.animationDuration = "16s";
	document.getElementById("logo").style.animationDuration = "16s";
	
	document.getElementById("button1").innerHTML = "yes";
	document.getElementById("button2").innerHTML = "no";
}

var dogcount = 0;
var dogpicnum = 1;

function dogclick() {
	dogcount++;
	document.getElementById("numdog").innerHTML = dogcount + " dogs";
	document.getElementById("clicktemp").innerHTML = "";
	
	switch(dogpicnum) {
		case 1:
			dogpicnum = 2;
			document.getElementById("clickimg").src = "media/sidewaysdog2.png"
			break;
		case 2:
			dogpicnum = 3;
			document.getElementById("clickimg").src = "media/sidewaysdog3.png"
			break;
		case 3:
			dogpicnum = 4;
			document.getElementById("clickimg").src = "media/doggif1.gif"
			break;
		case 4:
			dogpicnum = 5;
			document.getElementById("clickimg").src = "media/dogdrop1.png"
			break;
		case 5:
			dogpicnum = 6;
			document.getElementById("clickimg").src = "media/dogdrop2.png"
			break;
		case 6:
			dogpicnum = 7;
			document.getElementById("clickimg").src = "media/dogdrop3.png"
			break;
		case 7:
			dogpicnum = 8;
			document.getElementById("clickimg").src = "media/dogdrop4.png"
			break;
		case 8:
			dogpicnum = 9;
			document.getElementById("clickimg").src = "media/dogdrop5.png"
			break;
		case 9:
			dogpicnum = 10;
			document.getElementById("clickimg").src = "media/dogspin.gif"
			break;
		case 10:
			dogpicnum = 11;
			document.getElementById("clickimg").src = "media/dogdrop6.png"
			break;
		case 11:
			dogpicnum = 1;
			document.getElementById("clickimg").src = "media/sidewaysdog1.png"
			break;
	}
	
}
