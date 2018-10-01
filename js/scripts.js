/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];
//Write your function here

//initialize a variable for the HTML content your going to build
var html ='';
var i;
//get the empty table content area
var tableContent = document.getElementById('table-content');

function buildTable(){
  //start with the table header
  html += '<tr><th>First</th><th>Last</th><th>Position</th><th>Year</th></tr>';

  for(i = 0; i < players.length; i++){
    console.log(players[i].first);
    var senior = players[i].year == 'Senior';
    if(senior){
      console.log('You are a Senior!');
      html += '<tr>';
      html += '<td><strong>' + players[i].first + '</strong></td>';
      html += '<td><strong>' + players[i].last + '</strong></td>';
      html += '<td><strong>' + players[i].position + '</strong></td>';
      html += '<td><strong>' + players[i].year + '</strong></td>';
      html += '</tr>';
    }else{
      html += '<tr>';
      html += '<td>' + players[i].first + '</td>';
      html += '<td>' + players[i].last + '</td>';
      html += '<td>' + players[i].position + '</td>';
      html += '<td>' + players[i].year + '</td>';
      html += '</tr>';
    }
  }//closing the for loop
  //building the HTML
  tableContent.innerHTML = html;
}//end of the buildTable function

buildTable();



/*
EXTRA CREDIT CHALLENGE (5 POINTS): Write a function that compares the list above with the list below, finds the players that made the All-State team, and displays a message with the results: "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____." Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.*/
var msg = '';
var allStarName = '';
var j;
var congrats = document.getElementById('all-star');



var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
    {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
   {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
   {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
   first:'Darleen',
   last: 'Lawrence',
   position: 'Guard',
   school: 'Everton High School'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  school: 'Springfield High School'
  }
];


function congratsMessage(){
  for(var j = 0; j < allStars.length; j++){
    console.log(allStars[j].first);
    for(i = 0; i <players.length; i++){
      if(allStars[j].first == players[i].first){
        console.log('Congrats Springfield Tigers!');
        allStarName += players[i].first + ' ' + players[i].last +'<br>';
      }//closing the if/else
    }//closing the for loop
  }//closing the for loop
  msg += '<strong>Congratulations to Springfield\'s 2018 North Carolina All-State honorees: </strong>' + '<br>' +allStarName;
  congrats.innerHTML = msg;
}
congratsMessage();
