let yearOfBirth = prompt('What is your year of birth?');
let city = prompt('In which city do you live?');
let currentYear = 2023;
let age = currentYear - yearOfBirth;
let message = " You live in the city " + city; 
const sports = {
  football: 'Olexand Zinchenko',
  box : 'Mike Tyson',
  basketball: 'LeBron James'
};

if (city === "Kyiv") {
  message = "You live in the capital of Ukraine. ";
} else if (city === "London") {
  message = "You live in the capital Great Britain. ";
} else if (city === "Washington") {
  message = "You live in the capital of USA. ";
}

const chosenSport = prompt('Choose your favorite sport: football, box or basketball?');
if (chosenSport) {
  if (chosenSport in sports) {
    alert(age + message + `Cool! Do you want to become ${sports[chosenSport]}?`);
  } else {
    alert(age + message + 'Sorry, but we dont know this kind of sport.');
  }
} else {
  alert(age + message + 'It is a pity that you did not want to enter your favorite sport');
}


