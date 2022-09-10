class Employee {
constructor(name, id, email){

this.name = name;
this.id = id;
this.email = email;
}

getName(){

    console.log(`Name: ${this.name}`);    
}

getId(){

    console.log(`ID: ${this.name}`);    
}

getEmail(){

    console.log(`Email: ${this.name}`);    
}

getRole(){

    console.log(`Role: ${this.constructor.name}`);    
}
}

const employee = new Employee ('Ash', '100', 'ash.ash@gmail.com')

employee.getRole();

module.exports = Employee;