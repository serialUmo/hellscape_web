function mobile() {
	
	if (x.matches) {
		window.location.replace("https://dialixx.github.io/hellscape_web/mobiledog.html");
	}

}

var x = window.matchMedia("(max-width: 700px)");
mobile(x);


var marqueearray = ["@everyone submit phrases for me to use in the website", "or images", "or whatever", "sideways dog", 
"idc i'll use everything but specifically phrases", "KHOOKH", "this dog sideways as hell", "thats what im sayin",
"I wish luigi dogged me raw for 20 years straight", "?????????", "nobody made you say this", "this website looks cool as hell",
"have sex", "downlododownload jokerman fontwnload jokerman fontadownload jokerman fontd downdownload download jokerman fontdownload",
"oh yeah you should make the website use jokerman dial", "btw i'll shorten them a smidge if they're too big to my subjective view",
"or some equally shitty one", "the goblins have awakened", "no wait", "whats jokerman", "ᵗʰᵉ ᵍᵒᵇˡᶦⁿᵉˢ ʰᵃᵛᵉ ᵃʷᵃᵏᵉⁿᵉᵈ",
"its the goblins were awakened", "FUCK", "OK", "aha the font", "yeah", "ᵗʰᵉ ᵍᵒᵇˡᶦⁿˢ ʷᵉʳᵉ ᵃʷᵃᵏᵉⁿᵉᵈ", "famous rtj song",
"[WARNING] Goblins have been integrated into the cell...!", "This Dog Does 11,640 Damage per Second", "This Is A Risk Of Rain 2 Reference",
"like an dsubscr ibe if you got the refern ce haha", "nottasty.mov", "i wonder can i use videos in the marquee", 
"you can probably use gifs though i assume videos should work too", "i dont remember downloading this gif onto my computer ",
"thats a video", "put this gif on the website", "may you attain the Yeah", "got it", "im using Everything™️ in this channel btw",
"letter_o_matic.zip", "zip bomb", "put a virus on the website", "press this button for a zip bomb!!", 
"i already have a button that nukes the tab thats enough", "sure", "press this button to do nothing of note!!", "the dog is coming",
"https://cdn.discordapp.com/attachments/933761679605522452/941332986878631936/video0.mp4",
"also i reserve the right to not use whatever i choose", "Everything™️ (most)", "actually no i had an idea", "Everything (everything)",
"also what is this", "i don't wabt to nuke my computer", "its literally just the letter o matic font", "i just had it on my computer",
"ah", "use the yakuza font", "https://www.dafont.com/edo-sz.font", "real", "got real", "not all hells wear scapes",
"as a hellscaper, i have a hard time distinguishing between sideways dogs and widesays dogs. that’s why, this pride month, I’m partnering with hellscape",
"-", "dialixx pinned a message to this channel. See all pinned messages — Today at 3:01 PM", "how are you gamering, gamer?",
"pareidolia is the first person to use racial slurs in hellscape (immediately regretted it)", "six", "6", " i'mongus", "huhh? wuhhhh???",
"hellscape's anniversary is june 24th", "join hell to play dnd with us!", "hey dialixx can you add porn to the website pls thx",
"hur hur", "a certified dialixx banger --> https://youtu.be/JK8ilaPZbKE", "help me i'm trapped in a marquee on a shitty website!!", "hey hows it going",
"scare your friends with this website!", "he was forced to eat cement", "ur stinky :(", "ur fragrant :)", "ecks dee", "felis glumbus",
"cat no ears cat staring into soul creepy img", "pxtone rules!!!!", "go play monolith: relics of the past", "go play zeroranger",
"go play astronautilus", "hi :)", "what do you mean", "americans be eating cheesed burger", "fusk", "i'm so meta, even this archaism",
"i have no mouse and i must meme", "also play hellscape!", "thanks javascript for not kicking my shit in today",
"hi im the creator of this website. i hope you have a nice day", "piracy is protest, here's why: https://youtu.be/mnnYCJNhw7w",
"pirate my code! also support me some way so i make more code or whatever else that you can pirate!!!",
"take a shot every time you read 'join hell'", "join hell to be able to add to the possible things these marquees can say",
"i like cats. do you like cats?", "https://youtu.be/GT5thic9BVQ", "https://youtu.be/GT5thic9BVQ", "https://youtu.be/GT5thic9BVQ",
"https://youtu.be/GT5thic9BVQ", "https://youtu.be/GT5thic9BVQ"];


var arrayceiling = marqueearray.length;

function marqueechange() {
	var arrayrandom1 = Math.floor(Math.random() * arrayceiling) + 1;
	var arrayrandom2 = Math.floor(Math.random() * arrayceiling) + 1;
	var arrayrandom3 = Math.floor(Math.random() * arrayceiling) + 1;
	document.getElementById("submitmarquee1").innerHTML = marqueearray[arrayrandom1];
	document.getElementById("submitmarquee2").innerHTML = marqueearray[arrayrandom2];
	document.getElementById("submitmarquee3").innerHTML = marqueearray[arrayrandom3];
}

setInterval(marqueechange, 11000)


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
