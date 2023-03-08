const weather = (inputStatement) => {
    if (inputStatement === "Nice weather today!")
        return "It's beautiful.";

    if (inputStatement === "Such crap weather!")
        return "It's been horrible.";

    return null;
};

export default weather;