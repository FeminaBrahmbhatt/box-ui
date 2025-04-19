module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '<rootDir>/jest.setup.ts', // 👈 Add this line
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
    '^storybook/internal/preview-api$': '<rootDir>/node_modules/@storybook/preview-api',
  },
};
