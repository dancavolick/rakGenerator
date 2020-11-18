var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

console.log(date);


function randomDate(end) {
    return new Date(today.getTime() + Math.random() * (end.getTime() - today.getTime()));
  }
  
  console.log(randomDate();
