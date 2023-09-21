import {Cargo} from "./cargo.js"
import {Astronaut} from "./astronaut.js"
import {IPayload} from "./interface_rocket.js"
class Rocket{
  

    name:string
    totalCapacityKg:number
    cargoItems:Cargo[]=[]
    astronauts:Astronaut[]=[]

    constructor( name:string,totalCapacityKg:number ){
        this.name=name
        this.totalCapacityKg=totalCapacityKg
    }
    
    sumMass( items): number{
        let sum=0;
        items.forEach(element=>
            {sum+=element.massKg})
            return sum;
    }
    currentMassKg():number{
        return this.sumMass(this.cargoItems)+this.sumMass(this.astronauts)
    }

    canAdd(item: number): boolean{
        if(this.currentMassKg() + item<= this.totalCapacityKg){
            return true;
        }else{
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo.massKg)){
            this.cargoItems.push(cargo)
            return true;
        }
        else{
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut.massKg)){
            this.astronauts.push(astronaut)
            return true;
        }
        else{
            return false;
        }
    }








    
            
}
export {Rocket}