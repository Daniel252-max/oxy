module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/']
};
