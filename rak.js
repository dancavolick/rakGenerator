//The aim of the code is to produce ideas for Random Acts of Kindness (RAK) for a selection of recipients.  On a random basis, the recipients will first be picked, then an act from the appropriate array (as some
//acts can only be performed for specific parties).  Finally, the date that the act should be performed on will be selected (this will always be 2 days from todays date i.e. if today is Sunday,
//the act should be performed on Tuesday)

//Code consists of:
// * 1 object containing 4 arrays and 1 date function
// * 4 index selectors using Math.random 
// * 1 main function to pull the data together and return pre-defined statements.

//OBJECT CONTAINING ARRAYS AND DATE FUNCTION 
let arraysDate = {
    recipient: ['family member', 'friend', 'stranger'],  //defines who the act will be performed for
    familyAct: ['make them a drink', 'tell them you love them', 'do their washing up', 'give them a hug', 'ask them if you can do one of their chores for them', 'have a chat with them', 'arrange a fun outing with them'],  //defines the acts which can be randomly selected by the main function if the recipient is 'family'
    friendAct: ['tell them what they mean to you', 'do their washing up', 'call them for a chat', 'buy them something that they like', 'offer to childmind on the day of their choice so that they can go out', 'cook them a meal'],  //defines the acts which can be randomly selected by the main function if the recipient is 'friend'
    strangerAct: ['say hello', 'give them a compliment', 'let them go in front of you in a queue', 'pay their car park charge for them', 'let them go first in a traffic queue'],  //defines the acts which can be randomly selected by the main function if the recipient is 'stranger'
    day () { 
      let dayNo = new Date().getDay(); //confirms today as a number (i.e. Sunday=0, Monday=1 etc)
      switch (dayNo) { //returns the day 2 days ahead of today
        case 0:
          return 'Tuesday';
        case 1:
          return 'Wednesday';
        case 2:
          return 'Thursday';
        case 3:
          return 'Friday';
        case 4:
          return 'Saturday';
        case 5:
          return 'Sunday';
        case 6:
          return 'Monday';
        default: 
          console.log('Error!');
        break;
      }  
    },
};

//INDEX SELECTORS
let recipientIndexSelector = (Math.floor(Math.random() * arraysDate.recipient.length)); //creates an index to identify a random recipient from the 3 values in the recipient array
let familyActIndex = (Math.floor(Math.random() * arraysDate.familyAct.length)); // creates an index to identify a random act from the familyAct array
let friendActIndex = (Math.floor(Math.random() * arraysDate.friendAct.length)); // creates an index to identify a random act from the friendAct array
let strangerActIndex = (Math.floor(Math.random() * arraysDate.strangerAct.length)); //creates an index to identify a random act from the strangerAct array

//MAIN FUNCTION
let act = () => {
  let recipient;
  let act;
  if (recipientIndexSelector === 0) {  //if the random recipient is a family member......
    recipient = arraysDate.recipient[recipientIndexSelector];  //set the recipient variable as the string 'family member'....
    act = arraysDate.familyAct[familyActIndex];  //and select the random act to be undertaken from the 'familyAct' array....
    return `RAK Idea! Find a ${recipient} and ${act} on ${arraysDate.day()}.  Good luck!`;  //pull the final string together, with string interpolation using template literals
  } else if (recipientIndexSelector === 1) {  //if the random recipient is a friend......
      recipient = 'friend';  //set the recipient variable as the string 'friend'....
      act = arraysDate.friendAct[friendActIndex];  //and select the random act to be undertaken from the 'friendAct' array....
      return `RAK Idea! Find a ${recipient} and ${act} on ${arraysDate.day()}.  Good luck!`;  //pull the final string together, with string interpolation using template literals
  } else if (recipientIndexSelector === 2) {  //if the random recipient is a stranger......
      recipient = 'stranger';  //set the recipient variable as the string 'stranger'....
      act = arraysDate.strangerAct[strangerActIndex];  //and select the random act to be undertaken from the 'strangerAct' array...
      return `RAK Idea! Find a ${recipient} and ${act} on ${arraysDate.day()}.  Good luck!`;  //pull the final string together, with string interpolation using template literals
  }
};

console.log(act()); //calls the 'act()' function and logs the random suggestion





  