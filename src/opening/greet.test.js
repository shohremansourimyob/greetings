import greet from "./greet";

describe("Greet", () => {
    it("should return null, when an unknown word is provided", () => {
        const expected = null;

        const response = greet("blah blah");

        expect(response).toBe(expected);
    });

    describe("When CoolOpening Toggle is off", () => {
        it("should say Hello! How are you?, when someone says Hello", () => {
            const expected = "Hi! How are you?";

            const response = greet("Hello");

            expect(response).toBe(expected);
        });

        it("should say Hello! How are you?, when someone says Hello", () => {
            const expected = "Hi! How are you?";

            const response = greet("Hello", "off");

            expect(response).toBe(expected);
        });
    });

    describe("When CoolOpening Toggle is on", () => {
        it("should say Hello! How are you?, when someone says Hello", () => {
            const expected = "Yo! Sup?";

            const response = greet("Hello", "on");

            expect(response).toBe(expected);
        });
    });
});