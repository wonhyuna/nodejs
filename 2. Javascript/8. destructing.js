const person ={
    name: 'Max',
    age: 29,
    greet(){        //arrow function 불가능
        console.log("Hi, I am " + this.name)
    }
};

//name을 프린트하는 arrow 함수
const printName = (personData) => { 
    console.log(personData.name);
}

printName(person);  //Max

//person의 name으로 바로 연결 {}이용
const printName2 = ({ name }) => { 
    console.log(name);
}

printName2(person);  //Max

//person의 name, age
const { name, age } = person;
console.log(name, age);

const hobbies = ['Spots', 'Cooking'];
const [hobby1, hobby2] = hobbies;   
//hobby1, 2는 이름이 원래 없는 것이기 때문에 임의로 정해줘도 됨
//hobbies에 값이 더 있어도 순서대로 정의한 개수만 해당됨
console.log(hobby1, hobby2);