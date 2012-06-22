$(document).ready(function(){
//	Timer.init();
	Timer.tick();
});

var Timer = {
	"tick": function() {
		var time = new Date();
		Timer.display(time);
		setTimeout(Timer.tick, 1000);
	},

	"display": function(time) {
		var hours  = Util.padNumber(time.getHours());
		var minutes = Util.padNumber(time.getMinutes());
		var seconds = Util.padNumber(time.getSeconds());

//		console.log(Timer.getHextime());

		var timeString = hours + ":" + minutes + ":" + seconds;
		$('#time').text(timeString);
		$('body').css("background-color", "#"+Timer.getHextime());
	},

	"getHextime": function() {
		var date = new Date();
		var milliseconds = date.getMilliseconds();
		var seconds = date.getSeconds();
		var minutes = date.getMinutes();
		var hours = date.getHours();
		var array = new Array();
		var dayParts = ((hours + (minutes / 60)) / 24);
		array[0] = Util.dec2hex(Math.round((dayParts * 15)));
		var hourParts = ((hours + (minutes / 60)) / 8);
		var hourPartsFloor = Math.floor(hourParts);
		array[1] = Util.dec2hex(Math.round(((hourParts - hourPartsFloor) * 15)));
		var minuteParts60th = ((minutes + (seconds / 60)) / 60);
		array[2] = Util.dec2hex(Math.round((minuteParts60th * 15)));
		var minuteParts10th = ((minutes + (seconds / 60)) / 10);
		var minuteParts10thFloor = Math.floor(minuteParts10th);
		array[3] = Util.dec2hex(Math.round(((minuteParts10th - minuteParts10thFloor) * 15)));
		var secondsParts60th = ((seconds + (milliseconds / 1000)) / 60);
		array[4] = Util.dec2hex(Math.round((secondsParts60th * 15)));
		var secondsParts10th = ((seconds + (milliseconds / 1000)) / 10);
		var secondsParts10thFloor = Math.floor(secondsParts10th);
		array[5] = Util.dec2hex(Math.round(((secondsParts10th - secondsParts10thFloor) * 15)));
		if (hours < 10){
			hours = ("0" + hours);
		};
		if (minutes < 10){
			minutes = ("0" + minutes);
		};
		if (seconds < 10){
			seconds = ("0" + seconds);
		};
		return (array.join(""));
	}
};

var Util = {
	"padNumber": function(number) {
		number = number.toString();
		if(number.length == 2)
			return number;
		return "0" + number;
	},

	"dec2hex": function(dec) {
		return dec.toString(16);
	}
};