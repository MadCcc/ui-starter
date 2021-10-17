module.exports = {
  extends: "stylelint-config-standard",
  plugins: ['stylelint-scss'],
  rules: {
    "string-quotes": "single",
    'color-hex-length': "long",
    'color-hex-case': "upper",
    'value-keyword-case': null,
    'max-line-length': 100,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'at-rule-empty-line-before': ['always', {
      ignoreAtRules: ['else', 'include', 'import', 'use']
    }],
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['else']
    }],
    'function-name-case': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'no-empty-source': null,
  }
};
