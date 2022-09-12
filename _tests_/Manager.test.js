const Manager = require("../lib/Manager");

test("Manager 'get..' methods", () => {
    const sampleManager = new Manager("Bob", "99", "bob@bob.com", "02089876543");
    expect(sampleManager.getName()).toBe("Bob");
    expect(sampleManager.getId()).toBe("99");
    expect(sampleManager.getEmail()).toBe("bob@bob.com");
    expect(sampleManager.getOfficeNumber()).toBe("02089876543");
    expect(sampleManager.getRole()).toBe("Manager");

})