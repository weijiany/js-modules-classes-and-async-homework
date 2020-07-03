export class Person {
    name;
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log(`${this.name} is moving`);
    }
}
