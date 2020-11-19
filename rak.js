let arraysDate = {
    recipient: ['family member', 'friend', 'stranger'],
    familyAct: ['make them a drink', 'tell them you love them', 'do their washing up', 'give them a hug', 'ask them if you can do one of their chores for them', 'have a chat with them', 'arrange a fun outing with them'],
    friendAct: ['tell them what they mean to you', 'do their washing up', 'call them for a chat', 'buy them something that they like', 'offer to childmind on the day of their choice so that they can go out', 'cook them a meal'],
    strangerAct: ['say hello', 'give them a compliment', 'let them go in front of you in a queue', 'pay their car park charge for them', 'let them go first in a traffic queue'],
    dayNo: new Date().getDay(),
    day () {
      switch (this.dayNo) {
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

let recipientIndexSelector = (Math.floor(Math.random() * arraysDate.recipient.length)); //creates an index to identify a random recipient

let familyActIndex = (Math.floor(Math.random() * arraysDate.familyAct.length)); // creates an index to identify a random act from the familyAct array
let friendActIndex = (Math.floor(Math.random() * arraysDate.friendAct.length)); // creates an index to identify a random act from the friendAct array
let strangerActIndex = (Math.floor(Math.random() * arraysDate.strangerAct.length)); //creates an index to identify a random act from the strangerAct array

let act = () => {
  let recipient;
  let act;
  if (recipientIndexSelector === 0) {
    recipient = arraysDate.recipient[recipientIndexSelector];
    act = arraysDate.familyAct[familyActIndex];
    return `RAK Idea! Find a ${recipient} and ${act} on ${arraysDate.day()}.  Good luck!`;
  } else if (recipientIndexSelector === 1) {
      recipient = 'friend';
      act = arraysDate.friendAct[friendActIndex];
      return `RAK Idea! Find a ${recipient} and ${act} on ${arraysDate.day()}.  Good luck!`;
  } else if (recipientIndexSelector === 2) {
      recipient = 'stranger';
      act = arraysDate.strangerAct[strangerActIndex];
      return `RAK Idea! Find a ${recipient} and ${act} on ${arraysDate.day()}.  Good luck!`;
  }
}

console.log(act());



  