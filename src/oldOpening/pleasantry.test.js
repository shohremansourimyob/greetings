import pleasantry from "./pleasantry";

it("should return How are you when called", ()=> {
    const expected = "How are you?";

    const response = pleasantry();

    expect(response).toBe(expected);
});