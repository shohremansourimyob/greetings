import weather from "./weather";

it('returns It\'s beatiful when input is Nice weather today', () => {
    const expected = 'It\'s beautiful.';

    const response = weather('Nice weather today!');

    expect(response).toBe(expected);
});

it('returns It\'s been horrible when input is Nice weather today', () => {
    const expected = 'It\'s been horrible.';

    const response = weather('Such crap weather!');

    expect(response).toBe(expected);
});

it('returns I beg your pardon when unknown statment', () => {
    const expected = null;

    const response = weather('Blah blah');

    expect(response).toBe(expected);
});