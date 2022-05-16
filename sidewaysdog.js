function mobile() {
	
	if (x.matches) {
		window.location.replace("https://dialixx.github.io/hellscape_web/mobiledog.html");
	}

}

var x = window.matchMedia("(max-width: 700px)");
mobile(x);

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

function tabseize() {
	for(i = 0; i < Infinity; i++) {
		setInterval(dogclick, 1)
	}
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

let dogstick = 0;
let dogroller = 0;
let dogdrop = 0;
let dogdoin = 0;
let uprightdog = 0;
let sidewayscanine = 0;
let sidewaysdog = 0;

let sidewaysdogmulti = (sidewaysdog * 137849526);

let dogpersecond = 0;


function dps1() {
		
	dogcount += dogpersecond;
	document.getElementById("numdog").innerHTML = dogcount + " dogs";
		
}

setInterval(dps1, 1000);


function purchasestick() {
	
	if(dogcount >= 10) {
		dogpersecond += 1;
		dogcount -= 10;
		dogstick += 1;
		
		document.getElementById("dograte").innerHTML = dogpersecond + " dogs per second";
		document.getElementById("numdog").innerHTML = dogcount + " dogs";
		
		document.getElementById("buildingcount").innerHTML = "you have...<br>" + dogstick + " dog sticks<br>" + dogroller + " dog rollers<br>" + dogdrop + " dog drops<br>" + dogdoin + " dog doins<br>" + uprightdog + " upright dogs<br>" + sidewayscanine + " sideways dogs<br>" + sidewaysdog + " sideways dogs";
	}
	
}

function purchaseroller() {
	if(dogcount >= 50) {
		dogpersecond += 3;
		dogcount -= 50;
		dogroller += 1;
		
		document.getElementById("dograte").innerHTML = dogpersecond + " dogs per second";
		document.getElementById("numdog").innerHTML = dogcount + " dogs";
		
		document.getElementById("buildingcount").innerHTML = "you have...<br>" + dogstick + " dog sticks<br>" + dogroller + " dog rollers<br>" + dogdrop + " dog drops<br>" + dogdoin + " dog doins<br>" + uprightdog + " upright dogs<br>" + sidewayscanine + " sideways dogs<br>" + sidewaysdog + " sideways dogs";
	}
}

function purchasedrop() {
	if(dogcount >= 500) {
		dogpersecond += 40;
		dogcount -= 500;
		dogdrop += 1;
		
		document.getElementById("dograte").innerHTML = dogpersecond + " dogs per second";
		document.getElementById("numdog").innerHTML = dogcount + " dogs";
		
		document.getElementById("buildingcount").innerHTML = "you have...<br>" + dogstick + " dog sticks<br>" + dogroller + " dog rollers<br>" + dogdrop + " dog drops<br>" + dogdoin + " dog doins<br>" + uprightdog + " upright dogs<br>" + sidewayscanine + " sideways dogs<br>" + sidewaysdog + " sideways dogs";
	}
}

function purchasedoin() {
	if(dogcount >= 1500) {
		dogpersecond += 100;
		dogcount -= 1500;
		dogdoin += 1;
		
		document.getElementById("dograte").innerHTML = dogpersecond + " dogs per second";
		document.getElementById("numdog").innerHTML = dogcount + " dogs";
		
		document.getElementById("buildingcount").innerHTML = "you have...<br>" + dogstick + " dog sticks<br>" + dogroller + " dog rollers<br>" + dogdrop + " dog drops<br>" + dogdoin + " dog doins<br>" + uprightdog + " upright dogs<br>" + sidewayscanine + " sideways dogs<br>" + sidewaysdog + " sideways dogs";
	}
}

function purchaseupright() {
	if(dogcount >= 8000) {
		dogpersecond += 1000;
		dogcount -= 8000;
		uprightdog += 1;
		
		document.getElementById("dograte").innerHTML = dogpersecond + " dogs per second";
		document.getElementById("numdog").innerHTML = dogcount + " dogs";
		
		document.getElementById("buildingcount").innerHTML = "you have...<br>" + dogstick + " dog sticks<br>" + dogroller + " dog rollers<br>" + dogdrop + " dog drops<br>" + dogdoin + " dog doins<br>" + uprightdog + " upright dogs<br>" + sidewayscanine + " sideways dogs<br>" + sidewaysdog + " sideways dogs";
	}
}

function purchasecanine() {
	if(dogcount >= 30000) {
		dogpersecond += 0;
		dogcount -= 30000;
		sidewayscanine += 1;
		
		document.getElementById("dograte").innerHTML = dogpersecond + " dogs per second";
		document.getElementById("numdog").innerHTML = dogcount + " dogs";
		
		document.getElementById("buildingcount").innerHTML = "you have...<br>" + dogstick + " dog sticks<br>" + dogroller + " dog rollers<br>" + dogdrop + " dog drops<br>" + dogdoin + " dog doins<br>" + uprightdog + " upright dogs<br>" + sidewayscanine + " sideways dogs<br>" + sidewaysdog + " sideways dogs";
	}
}

function purchasesideways() {
	if(dogcount >= 100000) {
		dogpersecond += 1278394123457092873;
		dogcount -= 100000;
		sidewaysdog += 1;
		
		document.getElementById("dograte").innerHTML = "lots of dogs per second";
		document.getElementById("numdog").innerHTML = dogcount + " dogs";
		
		document.getElementById("buildingcount").innerHTML = "you have...<br>" + dogstick + " dog sticks<br>" + dogroller + " dog rollers<br>" + dogdrop + " dog drops<br>" + dogdoin + " dog doins<br>" + uprightdog + " upright dogs<br>" + sidewayscanine + " sideways dogs<br>" + sidewaysdog + " sideways dogs";
	}
}
