let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

// 1
const getWomansName = () => {
    const women = characters.filter(character => character.gender === 'female').map(character => character.name);
    console.log('getWomansName() ' + women);
};

// 2
const getSmallerPeople = () => {
  const smaller = characters.map(character => {
    character.height -= 10
    return character;
    // Otra opción:
    // ({...character, height: character.height - 10})
  });
  console.log("getSmallerPeople() " + smaller);
}

// 3
const sumaDePeso = () => {
  const peso = characters.map((character) => character.mass);
  const sumaPeso = peso.reduce((acc,n) => acc + Number(n), 0);
  console.log("sumaDePeso() " + sumaPeso);
}

// 4
const  mediaDeAltura = () => {
  const altura = characters.map((character) => character.height);
  const sumaAltura = altura.reduce((acc,n) => acc + Number(n), 0);
  console.log("mediaDeAltura() " + sumaAltura/altura.length);
}

// 5 ??????????
const collectByIndex = (index) => {
  collectedCharacters.push(characters[index]);
  console.log("collectByIndex() " + collectedCharacters);
}

// 6
const collectByName = (characterName) => {
  const newChar = characters.find(nombre => nombre.name.includes(characterName) && characterName.length > 3);
  if(Boolean(newChar)){
    collectedCharacters.push(newChar);
    console.log("collectByName() " + collectedCharacters[collectedCharacters.length-1].name);
  } else console.log("collectByName() error");
}

//  /^[a-zA-Z0-9]+(?:[ -][a-zA-Z0-9]+)*$/.test(characterName)

// 7
const removeByName = (characterName) => {
  const removeChar = collectedCharacters.find(nombre => nombre.name.includes(characterName) && characterName.length > 3);
  if(Boolean(removeChar)){
    console.log("removeByName() " + collectedCharacters[collectedCharacters.length-1].name);
    collectedCharacters.splice(collectedCharacters.indexOf(removeChar), 1);
  } else console.log("collectByName() error");
}

// 8
const getCharacterFilms = (characterName) => {
  const filmChar = characters.find(nombre => nombre.name.includes(characterName) && characterName.length > 3);
  console.log(filmChar.films);
}

// 9
const collectByName2 = (characterName) => {
  const newChar = characters.find(nombre => nombre.name.includes(characterName) && characterName.length > 3);
  newChar.amount = 1;
  const intruders = collectedCharacters2.find(character => character.amount === 1);
  if(Boolean(newChar) && (intruders !== newChar)){
    collectedCharacters2.push(newChar);
    console.log("collectByName2() " + collectedCharacters2[collectedCharacters2.length-1].name);
  } else console.log("collectByName2() error");
}

// 10
const mediaDeAltura2 = () => {
  const altura = collectedCharacters2.map((character) => character.height);
  const sumaAltura = altura.reduce((acc,n) => acc + Number(n), 0);
  console.log("mediaDeAltura2() " + sumaAltura/altura.length);
}

// 11 ??????????
const removeByName2 = (characterName) => {
  const removeChar = collectedCharacters2.find(nombre => nombre.name.includes(characterName) && characterName.length > 3);
  if(Boolean(removeChar)){
    collectedCharacters2.splice(collectedCharacters2.indexOf(removeChar), 1);
    console.log("removeByName2() " + collectedCharacters2);
  } else console.log("removeByName2() error");
}

const queryData = async () => {
  const response = await fetch("https://swapi.py4e.com/api/people");
  const data = await response.json();
  characters = data.results;
  console.log(characters);

  // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
  getWomansName();
  getSmallerPeople();
  sumaDePeso();
  mediaDeAltura();
  collectByIndex(4);
  collectByName("Luke");
  removeByName("Luke");
  getCharacterFilms("R2-D2");
  collectByName2("Leia");
  collectByName2("Leia");
  collectByName2("C-3PO");
  mediaDeAltura2();
  removeByName2("Leia");
};

queryData();