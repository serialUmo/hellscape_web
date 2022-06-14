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

function changeartimg(a) {
		document.getElementById("artimgfull").src = a;
		document.getElementById("artdisplay").style.display = "block";
	}
	
	function artdisplayclose() {
		document.getElementById("artdisplay").style.display = "none";
	}
