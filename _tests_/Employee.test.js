const Employee = require("../lib/Employee");

test("Employee 'get..' methods", () => {
    const sampleEmployee = new Employee("Bob", "99", "bob@bob.com");
    expect(sampleEmployee.getName()).toBe("Bob");
    expect(sampleEmployee.getId()).toBe("99");
    expect(sampleEmployee.getEmail()).toBe("bob@bob.com");
    expect(sampleEmployee.getRole()).toBe("Employee");
})
