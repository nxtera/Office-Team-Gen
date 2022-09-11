class Employee {
constructor(name, id, email){

this.name = name;
this.id = id;
this.email = email;
}

getName(){

    return this.name;    
}

getId(){

    return this.id;    
}

getEmail(){

    return (`${this.email}`);    
}

getRole(){

    return (`${this.constructor.name}`);    
}
}

//var star = new Employee ('Ash', '1','2@2.com');
//console.log (star.getName())
module.exports = Employee;