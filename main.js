const startBtn = document.getElementById('mainBtn');
const well = document.getElementsByClassName('well')[0];
var guestArea = document.getElementById('guest');
var player2Area = document.getElementById('player2');
var player3Area = document.getElementById('player3');
var player4Area = document.getElementById('player4');
var testText = ['Ako budes most, svako ce da te gazi','Ako drugog postuješ za sebe ne brini.','Ako zelis jezgro, slomi ljusku','Ako je neko lud, ne budi mu drug.','Ako ih ne mozes pobediti pridruzi im se','Ako jedna zelja nije zadovoljena to je dovoljan razlog.'];
var random;
mainBtn.addEventListener('click',function (argument) {
	startCout()
	
})


function startCout() {
	let counter = 2;
	startBtn.innerHTML = counter;
	var loop = setInterval(function () {
		counter--;
		startBtn.innerHTML = counter;

		if (counter == 0) {
			clearInterval(loop);
			startBtn.style.display = 'none';
			well.style.display = 'block';
			random = Math.floor(Math.random()*testText.length);
			well.innerHTML = "<h1>"+testText[random]+"</h1>";
			guestArea.focus();
			guestArea.addEventListener('keyup',guestStartTyping);
			player2StartTyping();
			player3StartTyping();
			player4StartTyping();
		}
	},1000)

}

function player2StartTyping() {
	var text = testText[random];
	var textArr = text.split("");
	let loop = setInterval(function () {
		if (textArr.length > 0) {
			player2Area.value += textArr.shift(); 
		}else{
			clearInterval(loop)
		}
	},200)
}
function player3StartTyping() {
	var text = testText[random];
	var textArr = text.split("");
	let loop = setInterval(function () {
		if (textArr.length > 0) {
			player3Area.value += textArr.shift(); 
		}else{
			clearInterval(loop)
		}
	},300)
}
function player4StartTyping() {
	var text = testText[random];
	var textArr = text.split("");
	let loop = setInterval(function () {
		if (textArr.length > 0) {
			player4Area.value += textArr.shift(); 
		}else{
			clearInterval(loop)
		}
	},350)
}

function guestStartTyping(e) {
	if (e.keyCode === 13) {
		checkGuestTyping();
	}
}

function checkGuestTyping() {
	if (guestArea.value.trim() == testText[random]) {
		console.log(true)
	}else{
		console.log(false)
	}
}