var vicNames = [];
var vicPhone = [];
var vicStreet = [];

var volNames = [];
var volPhone = [];
var volStreet = [];

var displayVics = [];
var displayVols = [];

var starter = parseInt(prompt("How many disaster victims do you wish to enter?","0"));

for (var i=0; i<starter; i++) {

	var vicGetNames = prompt("Enter victims name:");
	vicNames.push(vicGetNames);

	var vicGetPhone = prompt("Enter victims phone number:");
	vicPhone.push(vicGetPhone);

	var vicGetStreet = prompt("Enter victims street");
	vicStreet.push(vicGetStreet);
};

var volunteers = parseInt(prompt("How many volunteers do you wish to enter?","0"));

for (var i=0; i<volunteers; i++) {

	var volGetNames = prompt("Enter volunteers name:");
	volNames.push(volGetNames);

	var volGetPhone = prompt("Enter volunteers phone number:");		
	volPhone.push(volGetPhone);

	var volGetStreet = prompt("Enter volunteers street");
	volStreet.push(volGetStreet);
};


for (var i=0;i<starter;i++) {
	displayVics.push( "Name: " + vicNames[i] + " Phone: " + vicPhone[i] + " Street: " + vicStreet[i] );
};


for (var i=0;i<volunteers;i++) {
	displayVols.push( "Name: " + volNames[i] + " Phone: " + volPhone[i] + " Street: " + volStreet[i] );
};

alert("Number of persons in need: " + starter +
	"\nNumber of volunteers: " + volunteers +
	"\nPersons in need: " + displayVics +
	"\nVolunteers: " + displayVols);

// console.log(vicNames);
// console.log(vicPhone);
// console.log(vicStreet);

// console.log(volNames);
// console.log(volPhone);
// console.log(volStreet);




// for (var i = 0; i < starter.length; i = starter.length)