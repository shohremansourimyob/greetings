import greet from "./greet";

it("should say Hello! How are you?, when someone says Hello", () => {
    const expected = 'Hi! How are you?';

    const response = greet("Hello");

    expect(response).toBe(expected);
});


it('should say I beg your pardon, when an unknown word is provided', () => {
    const expected = 'I beg your pardon?';

    const response = greet('blah blah');

    expect(response).toBe(expected);
});

