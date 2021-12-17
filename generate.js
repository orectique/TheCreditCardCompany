var month = Math.floor((Math.random() * 12) + 1);
var year = Math.floor((Math.random() * 8) + 21);

var exp = 'EXP: ' + String(month) + '/' + String(year);

var num = '';

for (let i = 0; i < 4; i++) {
    num += String(Math.floor((Math.random() * 8999) + 1000)) + ' ';
  }

var fnames = ['Michael', 'Christopher', 'Jessica', 'Matthew', 'Ashley', 'Jennifer', 'Joshua', 'Amanda', 'Daniel', 'David', 'James', 'Robert', 'John', 'Joseph', 'Andrew', 'Ryan', 'Brandon', 'Jason', 'Justin', 'Sarah', 'William', 'Jonathan', 'Stephanie', 'Brian', 'Nicole', 'Nicholas', 'Anthony', 'Heather', 'Eric', 'Elizabeth', 'Adam', 'Megan', 'Melissa', 'Kevin', 'Steven', 'Thomas', 'Timothy', 'Christina', 'Kyle', 'Rachel', 'Laura', 'Lauren', 'Amber', 'Brittany', 'Danielle', 'Richard', 'Kimberly', 'Jeffrey', 'Amy', 'Crystal'];

var lnames = ['Peterson', 'Hansley', 'Jenkins', 'Kora', 'Nora', 'Cromwel', 'Ashley', 'Bardot', 'Lopez', 'Hill', 'Tyson', 'Bolt', 'Sharpe', 'Cassidy', 'Langley', 'Monroe West', 'Poverly', 'Raven', 'Daughtler', 'Madison', 'May', 'June', 'Solace', 'Hilton', 'Levine', 'Holly', 'Thatcher', 'McKenna', 'Marley', 'Ellis', 'Noel', 'Gonzales', 'Melenia', 'Hope', 'Cullen', 'Keller', 'Kade', 'Bandini', 'Elsher' ];

var username = String(fnames[Math.floor(Math.random() * fnames.length)] + ' ' + lnames[Math.floor(Math.random() * lnames.length)]);

document.getElementById("ccNum").innerHTML = num;
document.getElementById("cvv").innerHTML = 'CVV: ' + Math.floor((Math.random() * 899) + 100);
document.getElementById("exp").innerHTML = exp;
document.getElementById("userName").innerHTML = username;
