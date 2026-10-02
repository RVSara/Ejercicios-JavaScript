// 1
const miPerro = {
  piernas: 4,
  colas: 1,
  amigos: 3,
};

const amigosPerro = "amigos";

console.log(miPerro.piernas);
console.log(miPerro.colas);
console.log(miPerro[amigosPerro]);

// 2
const testObj = {
  ojos: 2,
  nombre: "Pablo",
  piernas: 2,
};
// Sólo hay que hacer modificaciones por debajo de esta línea
const ojos = testObj.ojos; // Cambiar esta línea
const nombre = testObj.nombre; // Cambia esta línea
console.log(ojos); // Debería mostrar: 2
console.log(nombre); // Debería mostrar: "Pablo"

// 3
const nuevoObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
const playerNumber = 19;
const player = nuevoObj[playerNumber]; // Cambia esta línea
console.log(player); // Debería mostrar: "Unitas"

// 4
const myDog = {
  nombre: "Coder",
  piernas: 4,
  colas: 1,
};
// Modifica esta línea con el código necesario
myDog.nombre = "HappyCoder";
console.log(myDog.nombre); // Debería mostrar: "HappyCoder"

// 5
// Convierte el bloque switch-case en un objeto llamado lookup.
function phoneticLookup(val) {
  let result = "";
  // Sólo cambia el código por debajo de esta línea
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  const property = val;
  result = lookup[property];
  // Sólo cambia el código por encima de esta línea
  return result;
}
const value = phoneticLookup("charlie");
console.log(value); // Chicago

// 6
const myMusic = [
  {
    artista: "Shakira",
    titulo: "Piano Man",
    formatos: ["CD", "8T", "LP"],
    premios: true,
  },
  {
    artista: "Paramore",
    titulo: "After Laughter",
    formatos: ["mp3", "CD", "streaming"],
    premios: false,
  },
];

console.log(myMusic[1].artista);
console.log(myMusic[1].formatos[0]);

// 7
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
const gloveBoxContents = myStorage.car.inside["glove box"]; // Cambia esta línea
console.log(gloveBoxContents); // Debería valer: "maps"

// 8
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];
const secondTree = myPlants[1].list;
console.log(secondTree); // Debería mostrar: ["fir", "pine", "birch"]
