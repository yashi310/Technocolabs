let raceNumber = Math.floor(Math.random() * 1000);
var registeredOrNot= true;
var runnerAge= 18;

if(registeredOrNot=true && runnerAge>18)
{
	raceNumber=raceNumber+1000;
}
if(raceNumber>1000 && runnerAge>18)
{
	console.log("They will run at 9:30 A.M.")
}
else if(runnerAge>18 && raceNumber<1000)
{
	console.log("They will run at 11:00 A.M " + raceNumber);
}
else if(runnerAge<18)
{
	console.log("They will run at 12:30 P.M.");
}
else
{
	console.log("See the registration desk");
}