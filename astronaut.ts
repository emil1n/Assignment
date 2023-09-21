import {IPayload} from "./IPayload.js"
class Astronaut implements IPayload{

    massKg:number;
    name:string;


    constructor(massKg:number,name:string){
            this.massKg=massKg
            this.name=name
            
        }
}

export {Astronaut}
