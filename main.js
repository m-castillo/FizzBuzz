$(document).ready(function() {


	$("input").keypress(function(e) {
		if (e.keyCode==13) {
	
			var number = $("input").val();

					for(i=1; i<=number; i++) {

						if (i%3==0 && i%5==0) {
							$("body").append("<p>FizzBuzz</p>");
						} 
						else if (i%3==0) {
							$("body").append("<p>Fizz</p>");
						} 
						else if (i%5==0) {
							$("body").append("<p>Buzz</p>");
						}
						 else {
						$("body").append("<p>" + i + "</p>");
						}; 
			};

		};
	});

	$("#reset").click(function (){
		location.reload();
	});

});
