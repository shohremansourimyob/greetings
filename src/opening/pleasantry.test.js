import pleasantry from "./pleasantry";

it("should return How are you when called", ()=> {
    const expected = "Sup?";

    const response = pleasantry();

    expect(response).toBe(expected);
});