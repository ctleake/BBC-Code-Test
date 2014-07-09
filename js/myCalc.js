	function lsd_calc(contents) { 
	
		var lsd_string = $(contents).val();
		//alert("You entered " + lsd_string); 
		var lsd_pence = lsd_calcpence(lsd_string);
		var lsd_coins = lsd_calccoins(lsd_pence);
		$('#workarea').children().remove();
		$('#workarea').append("<h2>Here are the minimal number of Sterling coins required</h2>"); 
		if (lsd_coins != '') {
			$('#workarea').append("<strong>"+lsd_coins+"</strong>");
		} else {
			$('#workarea').append("<strong>Please enter currency in the form [£]d...d[.]d...d[p]</strong>");
		}

	}  

	function lsd_calcpence(lsd_in) {

		lsd_in = $.trim(lsd_in);
		var has_pound = false;
		var has_pence = false;
		var has_decimal = false;
		if (lsd_in.charAt(0) == "£") {
			has_pound = true;
			lsd_in = lsd_in.substr(1);		
		}
		if (lsd_in.substr(-1) == "p") {
			has_pence = true;
			lsd_in = lsd_in.substr(0, lsd_in.length-1);		
		}
		if (isNaN(lsd_in) || lsd_in == "") {
			return 0;
		}
		if (lsd_in.search(/\./) != -1 || has_pound) {
			lsd_in = lsd_in * 100;
		}	
		lsd_in = parseFloat(lsd_in);
		lsd_in = Math.round(lsd_in);
		
		return lsd_in;

	}

	function lsd_calccoins(lsd_d) {
	
		var num_pounds = 0;
		var num_50ps = 0;
		var num_20ps = 0;
		var num_10ps = 0;
		var num_5ps = 0;
		var num_2ps = 0;
		var num_1ps = 0;
		var lsd_rem = lsd_d;
		var lsd_coins = "";
		
		num_pounds = parseInt(lsd_rem / 100);
		lsd_rem -= num_pounds * 100;
		if (num_pounds > 0) lsd_coins = num_pounds+" x £1"; 
		num_50ps = parseInt(lsd_rem / 50);
		lsd_rem -= num_50ps * 50;
		if (num_50ps > 0) {
			if (lsd_coins != "") lsd_coins += ", "; 
			lsd_coins += num_50ps+" x 50p";
		}			
		num_20ps = parseInt(lsd_rem / 20);
		lsd_rem -= num_20ps * 20;
		if (num_20ps > 0) {
			if (lsd_coins != "") lsd_coins += ", ";
			lsd_coins += num_20ps+" x 20p";
		}			
		num_10ps = parseInt(lsd_rem / 10);
		lsd_rem -= num_10ps * 10;
		if (num_10ps > 0) {
			if (lsd_coins != "") lsd_coins += ", ";
			lsd_coins += num_10ps+" x 10p"; 
		}
		num_5ps = parseInt(lsd_rem / 5);
		lsd_rem -= num_5ps * 5;
		if (num_5ps > 0) {
			if (lsd_coins != "") lsd_coins += ", ";
			lsd_coins += num_5ps+" x 5p"; 
		}
		num_2ps = parseInt(lsd_rem / 2);
		lsd_rem -= num_2ps * 2;
		if (num_2ps > 0) {
			if (lsd_coins != "") lsd_coins += ", ";
			lsd_coins += num_2ps+" x 2p"; 
		}
		num_1ps = lsd_rem;
		if (num_1ps > 0) {
			if (lsd_coins != "") lsd_coins += ", ";
			lsd_coins += num_1ps+" x 1p"; 
		}
		
		return lsd_coins;
	}
