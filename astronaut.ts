import {IPayload} from "./IInterface_rocket.js"
class Astronaut implements IPayload{

    massKg:number;
    name:string;


    constructor(massKg:number,name:string){
            this.massKg=massKg
            this.name=name
            
        }
}

export {Astronaut}
