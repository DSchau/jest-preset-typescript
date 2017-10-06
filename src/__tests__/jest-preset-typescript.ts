import preset = require('../jest-preset-typescript');

test('it contains expected keys', () => {
  expect(Object.keys(preset)).toMatchSnapshot();
});

test('it allows typescript, typescript react, and javascript files', () => {
  const files = [
    'sample.js',
    'sample.ts',
    'sample.tsx'
  ];

  const extensions = preset.moduleFileExtensions
    .map(ext => new RegExp(`.${ext}$`));

  const matches = file => extensions.some(ext => ext.test(file));

  files
    .forEach(file => {
      expect(matches(file)).toBe(true);
    });
});

describe('testRegex', () => {
  const expr = new RegExp(preset.testRegex);

  test('it matches regular files in __test__ folder', () => {
    [
      '/__tests__/sample.js',
      '/src/__tests__/other.ts',
      '/src/components/button/__tests__/button.tsx'
    ]
      .forEach(file => {
        expect(expr.test(file)).toBe(true);
      });
  });

  test('it matches files ending in .test.ext', () => {
    [
      '/sample.test.js',
      '/src/other.test.ts',
      '/src/components/button/button.test.tsx'
    ]
      .forEach(file => {
        expect(expr.test(file)).toBe(true);
      });
  });

  test('it matches files ending in .spec.ext', () => {
    [
      '/sample.spec.js',
      '/src/other.spec.ts',
      '/src/components/button/button.spec.tsx'
    ]
      .forEach(file => {
        expect(expr.test(file)).toBe(true);
      });
  });

  test('it matches files ending in extension & in __test__ folders', () => {
    [
      '/__tests__/sample.test.js',
      '/src/__tests__/other.test.ts',
      '/src/components/button/__tests__/button.test.tsx'
    ]
      .forEach(file => {
        expect(expr.test(file)).toBe(true);
      });

  });
});

test('transform only applies to ts/tsx files', () => {
  const [exts] = Object.keys(preset.transform);

  const expr = new RegExp(exts);

  expect(expr.test('sample.ts')).toBe(true);
  expect(expr.test('sample.tsx')).toBe(true);
  expect(expr.test('sample.js')).toBe(false);
});
