let houseKeeper1 = {
    yearsOfExperience : 12,
    name : "jane",
    cleanRepertoire : ["bathroom", "lobby", "bedroom"]
}

let nameof = houseKeeper1.name;
let yearsOfExperience = houseKeeper1.yearsOfExperience;
let cleanRepertoire = houseKeeper1.cleanRepertoire;
// console.log(nameof);
// console.log(yearsOfExperience);
// console.log(cleanRepertoire);

//Constructor Function

function Bellboy (name, age, hasWorkPermit, languages) {

    this.name = name;

    this.age = age;

    this.hasWorkPermit = hasWorkPermit;

    this.languages = languages;

}

let bellboy1 = new Bellboy ("Timmy", 19 , true, ["English", "French"]);
let bellboy2 = new Bellboy ("john", 21 , true, ["English"]);
let bellboy3 = new Bellboy ("Timmy", 23 , true, ["English", "French", "portuguese"]);
//Execute one by one....
// console.log(bellboy1);
// console.log(bellboy1.name);
// console.log(bellboy1.age);
// console.log(bellboy1.hasWorkPermit);
// console.log(bellboy1.languages);
// console.log(bellboy2);
// console.log(bellboy1.name);
// console.log(bellboy1.age);
// console.log(bellboy1.hasWorkPermit);
// console.log(bellboy1.languages);
// console.log(bellboy3);
// console.log(bellboy1.name);
// console.log(bellboy1.age);
// console.log(bellboy1.hasWorkPermit);
// console.log(bellboy1.languages);

function houseKeeper (yearsOfExperience, name, cleanRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleanRepertoire = cleanRepertoire;
    this.clean = function () {
        alert ("Cleaning in Progress.......");
    }
}

let houseKeeper3 = new houseKeeper (12, "james", ["Bedrooms"]);
console.log(houseKeeper3);
console.log(houseKeeper3.clean());
