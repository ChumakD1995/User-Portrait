let yearOfBirth = prompt('What is your year of birth?');
let city = prompt('In which city do you live?');
// let sport = prompt('What is your favorite sport?')
let currentYear = 2023;
let age = currentYear - yearOfBirth;
let message = " You live in the city " + city; 
const sports = {
  football: 'Olexand Zinchenko',
  box : 'Mike Tyson',
  basketball: 'LeBron James'
};

if (city === "Kyiv") {
  message = "You live in the capital of Ukraine";
} else if (city === "London") {
  message = "You live in the capital Great Britain";
} else if (city === "Washington") {
  message = "You live in the capital of USA";
}
alert(age + message); 

if (city != "Kyiv") {
  message = "city";
} else if (city != "London") {
  message = "city";
} else if (city != "Washington") {
  message = "city";
}


const chosenSport = prompt('Choose your favorite sport: football, box or basketball?');
if (chosenSport) {
  if (chosenSport in sports) {
    alert(`Cool! Do you want to become ${sports[chosenSport]}?`);
  } else {
    alert('Sorry, but we dont know this kind of sport.');
  }
} else {
  alert('It is a pity that you did not want to enter your favorite sport');
}

// if (sport === "football") {
//   message = "Cool! Do you want to become Olexand Zinchenko?"
// }
// if (sport === "box") {
//   message = "Cool! Do you want to become Mike Tyson?"
// }
// if (sport === "tennis") {
//   message = "Cool! Do you want to become Lorenzo Brown?"
// }




// const sports = {
//   football: "Olexand Zinchenko",
//   box : "Mike Tyson",
//   basketball: "LeBron James"
// };

// const chosenSport = prompt("Choose your favorite sport");
// if (chosenSport) {
//   if (chosenSport in sports) {
//     alert('Cool! Do you want to become ${sports[chosenSport]}?');
//   } else {
//     alert("Вибачте, але ми не знаємо такого виду спорту.");
//   }
// } else {
//   alert("Шкода, що Ви не захотіли ввести свій(ю) ...");
// }








// let sportMessage = prompt('What is your favorite sport?'); 
// if (sport === "football") {
//   sportMessage = "Cool! Do you want to become Olexandr Zinchenko?";
// } else if (sport === "basketball") {
//   sportMessage = "Cool! Do you want to become LeBron James?";
// } else if (sport === "tennis") {
//   sportMessage = "Cool! Do you want to become Lorenzo Brown?";
// } 
// alert(sportMessage)

// const sports = {
//   football: {
//     champion: "Oleksand Zinchnko",
//   },
//   basketball: {
//     champion: "LeBron James",
//   },
//   tennis: {
//     champion: "Lorenzo Brown",
//   },
// };

// const favoriteSport = prompt('What is your favorite sport?'); 
// if (favoriteSport) {
//   const chosenSport = favoriteSport.toLowerCase();
//   const champion = sports[chosenSport]?.champion;
//   if (champion) {
//     alert('Cool! Do you want to become ${champion}?');
//   } else {
//     alert("It's a pity that you didn't want to enter your favorite sport");
//   }       
// }