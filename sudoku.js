/*

The Javascript to run the game! ^_^

*/

//Listen for keys
document.onkeypress = getKey;

//Set the arrays for the different puzzles

var defaultStart 	= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var defaultEnd	 	= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var easyStart	 	= new Array(0,4,6,2,8,0,0,0,0,5,0,0,6,0,0,7,4,0,2,0,0,0,0,0,0,0,0,0,0,5,0,3,2,0,7,0,0,2,1,0,0,0,4,8,0,0,3,0,1,7,0,5,0,0,0,0,0,0,0,0,0,0,5,0,9,4,0,0,1,0,0,7,0,0,0,0,9,6,8,3,0);
var easyEnd		 	= new Array(9,4,6,2,8,7,3,5,1,5,8,3,6,1,9,7,4,2,2,1,7,5,4,3,6,9,8,8,6,5,4,3,2,1,7,9,7,2,1,9,6,5,4,8,3,4,3,9,1,7,8,5,2,6,6,7,8,3,2,4,9,1,5,3,9,4,8,5,1,2,6,7,1,5,2,7,9,6,8,3,4);
var mediumStart 	= new Array(0,0,0,8,0,0,0,1,7,4,3,0,0,0,0,0,0,0,0,0,2,0,0,0,9,0,0,2,0,0,0,0,8,0,0,0,0,9,7,6,0,3,4,8,0,0,0,0,7,0,0,0,0,5,0,0,6,0,0,0,1,0,0,0,0,0,0,0,0,0,4,8,5,8,0,0,0,1,0,0,0);
var mediumEnd	 	= new Array(6,5,9,8,2,4,3,1,7,4,3,1,5,9,7,8,2,6,8,7,2,1,3,6,9,5,4,2,6,5,9,4,8,7,3,1,1,9,7,6,5,3,4,8,2,3,4,8,7,1,2,6,9,5,9,2,6,4,8,5,1,7,3,7,1,3,2,6,9,5,4,8,5,8,4,3,7,1,2,6,9);
var hardStart 		= new Array(9,0,0,0,0,1,0,5,0,7,6,5,0,0,0,0,0,0,1,0,0,3,0,0,0,0,8,0,0,0,0,0,6,0,4,0,0,0,0,2,1,8,0,0,0,0,9,0,4,0,0,0,0,0,6,0,0,0,0,4,0,0,2,0,0,0,0,0,0,8,3,7,0,3,0,1,0,0,0,0,5);
var hardEnd		 	= new Array(9,8,3,7,2,1,6,5,4,7,6,5,8,4,9,3,2,1,1,2,4,3,6,5,7,9,8,8,1,7,9,5,6,2,4,3,3,4,6,2,1,8,5,7,9,5,9,2,4,7,3,1,8,6,6,7,8,5,3,4,9,1,2,4,5,1,6,9,2,8,3,7,2,3,9,1,8,7,4,6,5);

//Functions to load the different puzzles
function loadEasy(){defaultStart = easyStart; defaultEnd = easyEnd; loadCells(); }
function loadMedium(){defaultStart = mediumStart; defaultEnd = mediumEnd; loadCells();}
function loadHard(){defaultStart = hardStart; defaultEnd = hardEnd; loadCells();}
function loadDefault(){loadCells(); }

//Function for loading puzzle
function loadCells(){
	for (i=1; i <= 81; i++){
	var thisBox = document.getElementById("box" + i);
	if (defaultStart[(i-1)] == 0){ thisNumber = " ";} else { thisNumber = defaultStart[(i-1)]; }
	thisBox.innerHTML = thisNumber;
	thisBox.onclick = selectBox;
	}
}

//Function for detecting which box a user has selected
function selectBox(){

	//If internet explorer (else use for other browsers)
	if (window.event){
		selectedBox = window.event.srcElement;
	
	}else{
		selectedBox = this;
	}
}

//Function for detecting what button a user presses
function getKey(eve){

	//If internet explorer (else use for other browsers)
	if (window.event){
		getKeyChar = window.event.keyCode;
	
	}else{
		getKeyChar = eve.charCode;
	}
if (getKeyChar > 47 && getKeyChar < 58){
	getKeyString = String.fromCharCode(getKeyChar);
	if (getKeyString == 0) getKeyString = " ";
	selectedBox.innerHTML = getKeyString;
}
if (getKeyChar == 115){selectCell();} //If "S" pressed call selectCell function
}

//Function for checking input against the answers!
function checkPuzzle(){
	errorCount = 0;

	for (i=1; i <= 81; i++){
	var thisBox = document.getElementById("box" + i);
	
	if (thisBox.innerHTML != defaultEnd[i-1]){ 
	errorCount++;}
	}
	document.getElementById("checkOutput").innerHTML = (errorCount + " errors!!!");
}

function selectCell(){
	var numRow= prompt('Please type the row number.', '1');
	var numCol= prompt('Please type the column number.', '1');
	k = (((numRow - 1) * 9) + parseInt(numCol));
	selectedBox = document.getElementById("box" + k);
}