const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return (`Number: ${this.officeNumber}`);
    }
    getRole(){
        return (`Role: ${this.constructor.name}`);
    }
}

module.exports = Manager;