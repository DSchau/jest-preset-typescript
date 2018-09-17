const moduleFileExtensions = [
  'ts',
  'tsx',
  'js'
];

const testRegex = `(/__tests__/.*|(\\.|/)(test|spec))\\.(${moduleFileExtensions.join('|')})?$`;
const transform = {
  '.(ts|tsx)': 'ts-jest'
};

export = {
  moduleFileExtensions,
  testRegex,
  transform
}
