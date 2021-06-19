const getUserChoice= (userInput) =>{
	
	userInput = userInput.toLowerCase();
	if(userInput=="rock" || userInput=="paper" || userInput=="scissors")
	{
		return userInput;
	}
	else
	{
		console.log("Please enter a valid choice");
	}

}


function getComputerChoice()
{
	var x=Math.floor(Math.random() *3);
	if(x==0)
	{
		console.log("rock");

	}
	else if(x==1)
	{
		console.log("paper");
	}
	else
	{
		console.log("scissors");
	}

}

function determineWinner(userChoice,computerChoice)
{
	if(userChoice==computerChoice)
	{
		console.log("tie");
	}
	if(userChoice=="rock")
	{
		if(computerChoice=="paper")
		{
			console.log("computer won");
		}
		else
		{
			console.log("user won");
		}
	}
	if(userChoice=="paper")
	{
		if(computerChoice=="scissors")
		{
			console.log("computer won");
		}
		else
		{
			console.log("user won");
		}
	}
	if(userChoice=="scissors")
	{
		if(computerChoice=="rock")
		{
			console.log("computer won");
		}
		else
		{
			console.log("user won");
		}
	}

}

function playGame()
{
	var userChoice=getUserChoice("rock");
	console.log(userChoice);
	var computerChoice=getComputerChoice();
	console.log(computerChoice);
	console.log(determineWinner(userChoice,computerChoice));
}

playGame();

