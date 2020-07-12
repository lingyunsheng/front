interface Person {
    name:string;
    age?:number;
}

function getPeople(person: Person) {
    console.log(person.name);
}

let p1 = {name:'ge'}
getPeople(p1);