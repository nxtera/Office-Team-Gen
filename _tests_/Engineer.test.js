const Engineer = require("../lib/Engineer");

test("Engineer 'get..' methods", () => {
    const sampleEngineer = new Engineer("Bob", "99", "bob@bob.com", "bob100");
    expect(sampleEngineer.getName()).toBe("Bob");
    expect(sampleEngineer.getId()).toBe("99");
    expect(sampleEngineer.getEmail()).toBe("bob@bob.com");
    expect(sampleEngineer.getGithub()).toBe("bob100");
    expect(sampleEngineer.getRole()).toBe("Engineer");
})