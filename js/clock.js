$(document).ready(function(){
//	Timer.init();
	Timer.tick();
});

var Timer = {
	tick: function() {
		var time = new Date();
		Timer.display(time);
		setTimeout(Timer.tick, 1000);
	},

	"display": function(time) {
		var hours  = Util.padNumber(time.getHours());
		var minutes = Util.padNumber(time.getMinutes());
		var seconds = Util.padNumber(time.getSeconds());

		var timeString = hours + ":" + minutes + ":" + seconds;
		$('#time').text(timeString);
	}
};

var Util = {
	"padNumber": function(number) {
		number = number.toString();
		if(number.length == 2)
			return number;

		return "0" + number;
	}
};