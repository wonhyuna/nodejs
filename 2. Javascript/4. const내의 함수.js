const person ={
    name: 'Max',
    age: 29,
    greet(){        //arrow function 불가능
        console.log("Hi, I am " + this.name)
    }
};

person.greet();
