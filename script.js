$(document).ready(function(){


	var sugar = Cookies.get("sugarcookie");
	$('#input_div').text(sugar); 
	var chocolate=Cookies.get("chocolatecookie");
	$('#input_div2').text(chocolate);
	var lemon=Cookies.get("lemoncookie");
	$('#input_div3').text(lemon);

		$('#button1').on('click', function(){
			sugar++;
			Cookies.set("sugarcookie", parseInt(sugar));
			$('#input_div').text(sugar);
		});

		$('#button2').on('click', function(){
			chocolate++;
			Cookies.set("chocolatecookie", parseInt(chocolate));
			$('#input_div2').text(chocolate);
		});

		$('#button3').on('click', function(){
			lemon++;
			Cookies.set("lemoncookie", parseInt(lemon));
			$('#input_div3').text(lemon);
		});

		$('#sugarreset').on('click', function(){
			Cookies.set("sugarcookie", parseInt(0));
			$('#input_div').text(0);
			sugar = 0
		});

		$('#chocolatereset').on('click', function(){
					Cookies.set("chocolatecookie", parseInt(0));
					$('#input_div2').text(0);
					chocolate = 0
				});

		$('#lemonreset').on('click', function(){
					Cookies.set("lemoncookie", parseInt(0));
					$('#input_div3').text(0);
					lemon = 0
				});

});
