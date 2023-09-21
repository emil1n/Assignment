import {Cargo} from "./cargo.js"
import {Astronaut} from "./astronaut.js"
import {Rocket} from "./rocket.js"

let cag=new Cargo(10,"steel");
let ast=new Astronaut(2,"metal");
let roc=new Rocket("steel1",22)

let mass = parseInt(prompt("Weight of the cargo:"));
let name = prompt("Name of cargo:");
const cag1 = new Cargo(mass, name);
console.log(roc.addCargo(cag1));


let massA = parseInt(prompt("Weight of the Astro:"));
let nameA = prompt("Name of Astro:");
const ast1 = new Astronaut(massA, nameA);
console.log(roc.addAstronaut(ast1));
//console.log(roc.addAstronaut(ast))
//console.log(roc.addCargo(cag));

