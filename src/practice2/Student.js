import {Person} from "./Person";

export class Student extends Person{
    className;
    constructor(name, className) {
        super(name);
        this.className = className;
    }

    study = () => {
        super.move();
        console.log(`${this.name} is studying in ${this.className}`);
    }
}
