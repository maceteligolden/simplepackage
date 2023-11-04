module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['<rootDir>/dist/'],
    modulePaths: ['<rootDir>/src'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
};
  