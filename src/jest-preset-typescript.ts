const moduleFileExtensions = [
  'ts',
  'tsx',
  'js'
];

const testRegex = `(/__tests__/.*|(\\.|/)(test|spec))\\.(${moduleFileExtensions.join('|')})?$`;
const transform = {
  '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
};

export = {
  moduleFileExtensions,
  testRegex,
  transform
}
