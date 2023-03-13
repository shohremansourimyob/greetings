import pleasantry from "./pleasantry";

describe("Pleasantry", () => {
    describe("When CoolOpenings Toggle is off", () => {
        it("should return How are you when called", () => {
            const expected = "How are you?";

            const response = pleasantry("off");

            expect(response).toBe(expected);
        });
    });

    describe("When CoolOpenings Toggle is on", () => {
        it("should return How are you when called", () => {
            const expected = "Sup?";

            const response = pleasantry("on");

            expect(response).toBe(expected);
        });
    });
});