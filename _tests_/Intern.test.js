const Intern = require("../lib/Intern");

    test ("Intern", () => {
    const sampleIntern = new Intern ("Bob", "99", "bob@bob.com", "Hogwarts");
        expect(sampleIntern.getName()).toBe("Bob");
        expect(sampleIntern.getId()).toBe("99");
        expect(sampleIntern.getEmail()).toBe("bob@bob.com");
        expect(sampleIntern.getSchool()).toBe("Hogwarts");
        expect(sampleIntern.getRole()).toBe("Intern");
    })
    