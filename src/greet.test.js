import greet from "./greet";

it("should say Hello! How are you?, when someone says Hello", () => {
    const expected = 'Hi! How are you?';

    const response = greet();

    expect(response).toBe(expected);
});