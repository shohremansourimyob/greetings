import greet from "./greet";

it("should say Hello! How are you?, when someone says Hello", () => {
    const expected = "Hi! How are you?";

    const response = greet("Hello");

    expect(response).toBe(expected);
});


it("should return null, when an unknown word is provided", () => {
    const expected = null;

    const response = greet("blah blah");

    expect(response).toBe(expected);
});

