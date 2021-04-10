
        var univArray = new Array(
		{name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
		{name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
		{name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
		{name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
		{name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
		{name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
		{name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435},
		{name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
		{name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
		{name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
		);

		function createNewTable()
		{
		     for (var i = 0; i < getInputType.length; i ++)
			if (getInputType[i].checked) getInputType = getInputType[i].value;

		    var getInputType = document.getElementById('sType');
            var getTuition = document.getElementById('maxTuition').value;
            var getMaxSAT = document.getElementById('maxSAT').value;
            var getMinSAT = document.getElementById('minSAT').value;

            if (getTuition == "") getTU = 999999; else getTuition = parseInt(getTuition);
            if (getMaxSAT == "") getMaxSAT = 0; else getMaxSAT = parseInt(getMaxSAT);
            if (getMinSAT == "") getMinSAT = 0; else getMinSAT = parseInt(getMinSAT);


            var newTable = new Array();
		    for (var i = 0; i < univArray.length; i ++){
			var thisArray = univArray[i];
			if (getInputType == "public" || getInputType == "private")
				if (thisArray.ownership != getInputType) continue;
			if (thisArray.tuition > getTuition) continue;
			if (thisArray.SATl < getMaxSAT) continue;
			if (thisArray.maxSAT < getMinSAT) continue;
			newTable.push(thisArray);
		}

		var create = document.getElementById('info');
		var product = "<table><tr><th class='titleCells'>Name</th><th>SAT High</th><th>SAT Low</th><th>Tuition</th></tr>"
		for (var i = 0; i < newTable.length; i ++)
		{
			product = product + "<tr";
			// console.error (i + " and the result of " + parseInt(i) % 2);
			if (parseInt(i) % 2 == 1) product = product + " class='color'";
			// if (i = newTable.length - 1) product = product + "class='last'";
			product = product + "><td class='titleCells'>"+newTable[i].nickname+"</td><td>"+getoutput[i].SATh+"</td><td>"+getoutput[i].SATl+"</td><td>"+getoutput[i].tuition+"</td></tr>";
		}
		product = product + "</table>";

		console.error (product);
		create.innerHTML = product;
	}
