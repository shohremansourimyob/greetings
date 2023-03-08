const weather = (inputStatement) => {
    if (inputStatement === 'Nice weather today!')
        return 'It\'s beautiful.';

    if (inputStatement === 'Such crap weather!')
        return 'It\'s been horrible.';

    return 'I beg your pardon?';
};

export default weather;