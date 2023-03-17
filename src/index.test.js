import cli from "./index";
import { unknownGreeting } from "./index";

const pardon = unknownGreeting();

it("should return I beg your pardon when cli is called", () => {
    const response = cli("Blah");

    expect(response).toBe(pardon);
});

it("should respond to hello", () => {
    const response = cli("Hello");

    expect(response).not.toEqual(null);
    expect(response).not.toEqual(pardon);
});

it("should respond to weather", () => {
    const response = cli("Nice weather today!");

    expect(response).not.toEqual(null);
    expect(response).not.toEqual(pardon);
});