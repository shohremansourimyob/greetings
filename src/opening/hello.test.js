import hello from "./hello";

it("returns hi when receives hi", () => {
    const expected = "Yo";

    const response =  hello();

    expect(response).toBe(expected);
});