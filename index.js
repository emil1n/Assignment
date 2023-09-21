import { Cargo } from "./cargo.js";
import { Astronaut } from "./astronaut.js";
import { Rocket } from "./rocket.js";
let cag = new Cargo(10, "steel");
let ast = new Astronaut(2, "metal");
let roc = new Rocket("steel1", 22);
console.log(roc.addAstronaut(ast));
console.log(roc.addCargo(cag));
