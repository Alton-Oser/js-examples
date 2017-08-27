
	//var reverse;

//function startUp() {
	
	document.getElementById("eventButton").addEventListener("click", listenFunction);
	document.getElementById("palindromeButton").addEventListener("click", reverseFunction);
	document.getElementById("reverseButton").addEventListener("click", reverseFunction);



function listenFunction() {
	alert("I heard you.");
	deafFunction();
}
function deafFunction() {
	document.getElementById("eventButton").removeEventListener("click", listenFunction);
	alert("But now I'm no longer listening");
	document.getElementById("eventButton").innerText="Not Listening";
}

function reverseFunction(msg) {
	var changeOrder = [];
	var toChange = document.getElementById("yourInput").value;
	changeOrder = toChange.split("").reverse().join("");
	addReverse(changeOrder);	
}
	
function addReverse(changeHere) {	
	var addTo = document.getElementById("hiddenParagraph");
	var newDiv = document.createElement("DIV");
	var newBreak = document.createElement("BR");
	newDiv.appendChild(document.createTextNode("Your input in reverse:  "));
	newDiv.appendChild(newBreak);
	newDiv.appendChild(document.createTextNode(changeHere));
	addTo.appendChild(newDiv);
	newDiv.setAttribute('id', 'reverseAdded');
	showHidden();
}

function showHidden() {
	document.getElementById("hiddenParagraph").style.visibility="visible";
}

/*  This works well 
************************************************/


function palindrome(str) {
  var newStr = str.replace(/[^a-z0-9]/gi,'');
  newStr = newStr.toLowerCase();
  var newStr1 = newStr;
  var orderChanged = reverseFunction(newStr1);
  if (newStr == orderChanged) {
    return true;
  } else {
    return false;
  }
}

/*
function reverseFunction(strToTest) {
	var changeOrder = [];
	changeOrder = strToTest.split("").reverse().join("");
  return changeOrder;
}
*/



findLongestWord("What if we try a super-long word such as otorhinolaryngology");

function findLongestWord(str) {
  var newStr = str.split(" ");
  var longest = 0;
  for (var i=0; i < newStr.length; i++) { //read in each word	  
	  if (newStr[i].length > longest) { //see how long each word is
		  longest = newStr[i].length;
	  }
  }
  //console.log(longest);
  return longest;
}

//findLongestWord("The quick brown fox jumped over the lazy dog");

function titleCase(str) {
  var newStr = str.toLowerCase().split(" "); // splits the string and makes all letters lower case
  for (var i=0; i < newStr.length; i++) { //cycles through each word in the newStr
	//newStr[i] is each word; substring(1) is the indes for the second char and beyond 
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
  }
  var capital = newStr.join(' ');
  return capital;

}

titleCase("i'm a little tea pot");


function largestOfFour(arr) {
  var largeList = [];
  for (var i = 0; i < arr.length; i++) {
	  var biggestNum = arr[i][0];
	  for (var j=0; j < arr[i].length; j++) { 		
		  if (arr[i][j] > biggestNum) {
			  biggestNum = (arr[i][j]); 
		  } 
	  }
	largeList[i] = biggestNum;	
  }
  console.log(largeList);
  return largeList;
}

largestOfFour([[4, 5, 1, 8], [53, 18, 26], [132, 35, 40, 39], [1], [33, 876, 23, 7]]);


function confirmEnding(str, target) {
  var newStr = str.split('').join('');
  var n = target.length;
  var ending = target.substr(0, n);
  var newStrEnd = newStr.substr(-n); //the negative starts from the last of the string and works to the left
  
  if (ending === newStrEnd) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "stian");


function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 0) {
    str = "";
  } else {
      var newStr = str;
      for (i = 1; i < num; i++) {
        str = str + newStr;
      }
  }
  return str;
}

repeatStringNumTimes("abc", -1);


function truncateString(str, num) { 
    if (num >= str.length) {
      str1 = str;
    } else if (str.length > num && num >= 3) {
      str1 = str.slice(0, num-3) + "...";
    } else {
      str1 = str.slice(0, num) + "...";
    }
  return str1;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


function chunk(array, size) {
  var result = []
  for (var i=0;i<array.length;i+=size) {
    result.push( array.slice(i,i+size) )
  }
	console.log(result);
  return result
  }
  
chunk(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3);







