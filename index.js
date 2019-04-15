let katzDeliLine =[];

//two parameters 
function takeANumber(currentLine, personName){
  let place = currentLine.length + 1; 
  let string = "Welcome, " + personName + ". You are number " + place + " in line.";
  //push personName into the string 
  currentLine.push(personName)
  // return a welcome message including the new person's position in line "Welcome, personName. You are number currentLine in line."
  return string; 
}

let count = 1; 

function takeANumberAlt(currentLine) {
  //get the number 1, add it to the line, return it to the customer 
  
  currentLine.push(count)
   
  return count++ 
  
  //return a number, stay at that number 
}


function resetCount(){
  var count = 0 
  
}



// //number 2 
function nowServing(currentLine) {
  let string = "";
  
  if (currentLine.length === 0) {
    string = 'There is nobody waiting to be served!' 
  } else {
    string = 'Currently serving ' + currentLine[0] +
"."  
    currentLine.shift(); //to remove the person
  }
  return string
}

// //number 3 

function currentLine(lineOfPeople) {
  let string = '';
  
  if (lineOfPeople.length === 0) {
  string = "The line is currently empty"
  } else { 
    string = "the line is currently:"
    for (let i = 0; i < lineOfPeople.lenght; i++) {
      if ( i === 0) {
        string = string + (i+1) + "." + lineOfPeople[i]
      } else {
        string = string + "," + (i+1) +"." + lineOfPeople[i]
      }
    }
  }
    return string; 
}
