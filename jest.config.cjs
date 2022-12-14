const path = require('path');

const roots = ['__mocks__', 'scripts'];

module.exports = {
  testEnvironment: 'node',
  testRegex: '/__tests__/.*(test|spec)\\.[jt]sx?$',
  rootDir: path.resolve(__dirname),
  displayName: require('./package').name,
  roots,
  clearMocks: true,
};
