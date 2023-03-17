import cli from "./index";
import { unknownGreeting } from "./index";

const pardon = unknownGreeting();

describe("CLI", () => {
    it("should return I beg your pardon when cli is called", () => {
        const response = cli("Blah", false);

        expect(response).toBe(pardon);
    });

    it("should respond to weather", () => {
        const response = cli("Nice weather today!", false);

        expect(response).not.toEqual(null);
        expect(response).not.toEqual(pardon);
    });

    describe("when coolOpeningFeature is off", () => {

        it("should respond to hello", () => {
            const response = cli("Hello", false);

            expect(response).not.toEqual(null);
            expect(response).toContain("Hi");

        });
    });

    describe("when coolOpeningFeature is on", () => {
        it("should respond to hello", () => {
            const response = cli("Hello", true);

            expect(response).not.toEqual(null);
            expect(response).toContain("Yo");

        });
    });
});