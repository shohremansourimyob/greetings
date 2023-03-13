import hello from "./hello";

describe("Hello", () => {
    describe("When CoolOpening feature is off", () => {
        it("returns hi when receives hi", () => {
            const expected = "Hi";

            const response = hello("off");

            expect(response).toBe(expected);
        });
    });

    describe("When CoolOpening feature is on", () => {
        it("returns hi when receives hi", () => {
            const expected = "Yo";

            const response = hello("on");

            expect(response).toBe(expected);
        });
    });
});