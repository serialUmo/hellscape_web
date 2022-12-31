/*
this used to be a text file and i can't be assed to
get rid of the mess that is the marquee js so just
ignore all the stuff that doesn't do anything. besides
i want more than one place where i can go grab the 
marquee code in case i want to use it somewhere again

also hi. steal this code if you want to
*/
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
"-", "dialixx pinned a message to this channel. See all pinned messages — Today at 3:01 PM"];


var arrayceiling = marqueearray.length;

function marqueechange() {
	var arrayrandom1 = Math.floor(Math.random() * arrayceiling) + 1;
	var arrayrandom2 = Math.floor(Math.random() * arrayceiling) + 1;
	var arrayrandom3 = Math.floor(Math.random() * arrayceiling) + 1;
	document.getElementById("submitmarquee1").innerHTML = marqueearray[arrayrandom1];
	document.getElementById("submitmarquee2").innerHTML = marqueearray[arrayrandom2];
	document.getElementById("submitmarquee3").innerHTML = marqueearray[arrayrandom3];
}

setInterval(marqueechange, 8000)


var rngincrement = 1;

function clearoutput() {
	rngincrement += 1;
	document.getElementById("output2").innerHTML = "> rng machine " + rngincrement + "<br>"
}

function dice(dmax) {
	var dice = Math.floor(Math.random() * dmax) + 1;
	var dnum = document.getElementById("dval").value;
	
	document.getElementById("output2").innerHTML += "> d" + dmax + " = " + dice + " * " + dnum + "<br>";
}

function statroll() {
	var stat1 = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
	var stat2 = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
	var stat3 = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
	var stat4 = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
	var stat5 = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
	var stat6 = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
	
	document.getElementById("output2").innerHTML += "> your stats: " + stat1 + " " + stat2 + " " + stat3 + " " + stat4 + " " + stat5 + " " + stat6 + "<br>";
}

function statroll20() {
	document.getElementById("output2").innerHTML += "> lol just roll 6 d20 or make them up<br>";
}

function customroll() {
	var dval = document.getElementById("dval").value;
	
	var dice = Math.floor(Math.random() * dval) + 1;
	
	document.getElementById("output2").innerHTML += "> d" + dval + " = " + dice + "<br>";
}