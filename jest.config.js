module.exports = {
    // Automatically clear mock calls and instances between every test
    'clearMocks': true,
    // The directory where Jest should output its coverage files
    'coverageDirectory': '.coverage',
    'moduleNameMapper': {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
        '^@/components(.*)$': '<rootDir>/components$1',
        '^@/services(.*)$': '<rootDir>/services$1',
        '^@/tests(.*)$': '<rootDir>/tests$1',
        '^@/utils(.*)$': '<rootDir>/utils$1',
        '^@/store(.*)$': '<rootDir>/store$1',
    },
    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    'setupFilesAfterEnv': ['./jest.setup.js'],
    'testEnvironment': 'jsdom'
}