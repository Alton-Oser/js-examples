
	var eBtn = document.getElementById("eventButton");
	eBtn.addEventListener("click", listenFunction); //for eventButton...I'm listening

	buttons = document.getElementsByTagName("button");
	enterKey = document.getElementsByTagName("input");

	for (var i=0; i<buttons.length; i++) {
		buttons[i].addEventListener("click", redirect, false);
	}
	for (var j=0; j<enterKey.length; j++) {
		enterKey[j].addEventListener("keyup", redirect, false);
	}
	
	function redirect(ev){
		if(ev.keyCode == 13) {
			if (ev.target.id == "yourInput") {
				reverseFunction(document.getElementById("yourInput").value);
			} else if(ev.target.id == "yourPalindrome") {
				palindrome(document.getElementById("yourPalindrome").value, 1);
			} else if (ev.target.id == "yourPhrase") {
				findLongestWord(document.getElementById("yourPhrase").value);
			} else if (ev.target.id == "capitalizeIt") {
				titleCase(document.getElementById("capitalizeIt").value);
			} else if (ev.target.id == "secondArray") {
				largestOfTwo(document.getElementById("firstArray").value, document.getElementById("secondArray").value);
			} else if (ev.target.id == "ending") {
				confirmEnding(document.getElementById("completePhrase").value, document.getElementById("ending").value);
			} else if (ev.target.id == "howManyTimes") {
				repeatStringNumTimes(document.getElementById("strToRepeat").value, document.getElementById("howManyTimes").value);
			} else if (ev.target.id == "howShort") {
				truncateString(document.getElementById("strToTruncate").value, document.getElementById("howShort").value);
			} else if (ev.target.id == "chunkSize") {
				chunk(document.getElementById("arrayToChunk").value, document.getElementById("chunkSize").value);
			}
		}
		if (ev.target.id == "palindromeButton") {
			palindrome(document.getElementById("yourPalindrome").value, 1);
		} else if (ev.target.id == "reverseButton") {
			reverseFunction(document.getElementById("yourInput").value);
		} else if (ev.target.id == "phraseButton") {
			findLongestWord(document.getElementById("yourPhrase").value);
		} else if (ev.target.id == "capButton") {
			titleCase(document.getElementById("capitalizeIt").value);
		} else if (ev.target.id == "grabArrayButton") {
			largestOfTwo(document.getElementById("firstArray").value, document.getElementById("secondArray").value);
		} else if (ev.target.id == "findEndingButton") {
			confirmEnding(document.getElementById("completePhrase").value, document.getElementById("ending").value);
		} else if (ev.target.id == "repeatButton") {
			repeatStringNumTimes(document.getElementById("strToRepeat").value, document.getElementById("howManyTimes").value);
		} else if (ev.target.id == "truncButton") {
			truncateString(document.getElementById("strToTruncate").value, document.getElementById("howShort").value);
		} else if (ev.target.id == "chunkButton") {
			chunk(document.getElementById("arrayToChunk").value, document.getElementById("chunkSize").value);
		}
	}

function listenFunction() {
	alert("I heard you.");
	deafFunction();
}
function deafFunction() {
	eBtn.removeEventListener("click", listenFunction);
	alert("But now I'm no longer listening");
	eBtn.innerText="Not Listening";
}

function reverseFunction(toChange, test) {
	var changeOrder = [];
	changeOrder = toChange.split("").reverse().join("");
	if (test !== 1) {
	addReverse(changeOrder);
	} else {
		return changeOrder; //return it to function palindrome - where it was called from
	}
}
	
function addReverse(changeHere) {
	if(document.contains(document.getElementById("reverseAdded"))) {
		document.getElementById("reverseAdded").innerHTML = ("Your input in reverse:  " + "<br/>" + changeHere);
	} else {
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
}

function showHidden() {
	document.getElementById("hiddenParagraph").style.visibility="visible";
}

function palindrome(str, test) {
	
  var newStr = str.replace(/[^a-z0-9]/gi,'');
  newStr = newStr.toLowerCase();
  var newStr1 = newStr;
  var orderChanged = reverseFunction(newStr1, 1);
	if (newStr === "") {
		document.getElementById("palindromeMsg0").style.display="block";
		document.getElementById("palindromeMsg1").style.display= "none";
		document.getElementById("palindromeMsg2").style.display= " none";
	}
	else if (newStr == orderChanged) {
		document.getElementById("palindromeMsg0").style.display="none";
		document.getElementById("palindromeMsg1").style.display="block";
		document.getElementById("palindromeMsg2").style.display="none";
  } else {
		document.getElementById("palindromeMsg0").style.display="none";
		document.getElementById("palindromeMsg2").style.display="block";
		document.getElementById("palindromeMsg1").style.display="none";
  }
}

function findLongestWord(str) {
  var newStr = str.split(" ");
  var longest = 0;
  for (var i=0; i < newStr.length; i++) { //read in each word	  
	  if (newStr[i].length > longest) { //see how long each word is
		  longest = newStr[i].length;
		  var longWord = newStr[i];
	  }
  }
  var lWord = document.getElementById("revealLongest");
  if (longWord == null) {
    lWord.innerHTML = "You failed to type something in the space provided.";
  } else {
	  lWord.innerHTML = longWord;
  }
}

//findLongestWord("The quick brown fox jumped over the lazy dog");

function titleCase(str) {
	var theCaps = document.getElementById("showCaps");
    theCaps.style.visibility="visible";
	if(str=="") {
		theCaps.innerText = "You failed to type something in the space provided.";
	} else {
		var newStr = str.toLowerCase().split(" "); // splits the string and makes all letters lower case
		for (var i=0; i < newStr.length; i++) { //cycles through each word in the newStr
		//newStr[i] is each word; substring(1) is the indes for the second char and beyond 
		newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
		}
		var capital = newStr.join(' ');
		theCaps.innerText = capital;
		return capital;
	}
}

//titleCase("i'm a little tea pot");

function largestOfTwo(arr, arr1) {
  var otherArray = [];
  var largeList = [];
  otherArray[0] = arr.split(" ");
  otherArray[1] = arr1.split(" ");

  largeList.push(Math.max.apply(null, otherArray[0]));//apply passes an array as a parameter
  largeList.push(Math.max.apply(null, otherArray[1]));//null is used in place of this
  var theArray = document.getElementById("showArray");
  theArray.style.visibility="visible";
  theArray.innerText = "Your two largest numbers are: " + largeList.join(" and ");
	
  return largeList; 
}
// largestOfFour([[4, 5, 1, 8], [53, 18, 26], [132, 35, 40, 39], [1], [33, 876, 23, 7]]);
/*
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
*/

function confirmEnding(str, target) {
  var newStr = str.split('').join('');
  var n = target.length;
  var ending = target.substr(0, n);
  var newStrEnd = newStr.substr(-n); //the negative starts from the last of the string and works to the left
  var endingTest = document.getElementById("showTorF");
  endingTest.style.visibility="visible";
  if (ending === newStrEnd) {
      endingTest.innerText = "You are in luck! \"" + newStr + "\" ends with \"" + ending + "\"";
  } else {
      endingTest.innerText = "Sorry! \"" + newStr + "\" does not end with \"" + ending + "\"";

  }
}

//confirmEnding("Bastian", "stian");


function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeat = document.getElementById("repeatString");
  if (num < 0) {
    str = "";
  } else {
      var newStr = str;
      for (i = 1; i < num; i++) {
        str = str + newStr;
      }
  }
  repeat.innerText = str;
  return str;
}

//repeatStringNumTimes("abc", -1);


function truncateString(str, num) { 
	var trunk = document.getElementById("truncString");
    if (num >= str.length) {
      str1 = str;
    } else if (str.length > num && num >= 3) {
      str1 = str.slice(0, num-3) + "...";
    } else {
      str1 = str.slice(0, num) + "...";
    }
	trunk.innerText = str1;
  return str1;
}

//truncateString("A-tisket a-tasket A green and yellow basket", 11);


function chunk(array, size) {
  var brokenArray = document.getElementById("finalChunk");
  var results = [];
  var arr1 = array.split(" ");
  var actualSize = parseInt(size);
    for (var i=0;i<arr1.length;i+=actualSize) {
    results.push( arr1.slice(i,i+actualSize) )
  }
	console.log(results);
	for (var i=0; i<results.length; i++) {
		brokenArray.innerText = brokenArray.innerText + " / " + results[i];
	}
	
  return results
  }
  
/*  
  function chunk1(array, size) {
  var result = [];
  for (var i=0;i<array.length;i+=size) {
    result.push( array.slice(i,i+size) )
  }
	console.log(result);
  return result
  }
  
chunk1(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3);

*/





