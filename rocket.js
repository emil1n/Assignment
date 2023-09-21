class Rocket {
    constructor(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items) {
        let sum = 0;
        items.forEach(element => { sum += element.massKg; });
        return sum;
    }
    currentMassKg() {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }
    canAdd(item) {
        if (this.currentMassKg() + item <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    }
    addCargo(cargo) {
        if (this.canAdd(cargo.massKg)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut.massKg)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}
export { Rocket };
