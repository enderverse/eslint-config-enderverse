'use strict';

module.exports = {
	env: { es6: true, node: true },
	extends: [ 'xo', 'xo-react' ],
	plugins: [ 'react', 'react-hooks', 'security' ],
	rules: {
		'array-bracket-spacing': [ 'error', 'always' ],
		'arrow-parens': [ 'error', 'always' ],
		'brace-style': [ 'error', 'stroustrup', { 'allowSingleLine': true } ],
		'capitalized-comments': 'off',
		'curly': [ 'warn', 'multi-line' ],
		'func-names': [ 'warn', 'as-needed' ],
		'jsx-quotes': [ 'warn', 'prefer-single' ],
		'linebreak-style': [ 'warn', 'unix' ],
		'no-multiple-empty-lines': [ 'error', { 'max': 3 } ],
		'no-negated-condition': 'off',
		'object-curly-spacing': [ 'error', 'always' ],
		'padded-blocks': [ 'error', { 'blocks': 'never', 'classes': 'always', 'switches': 'never' } ],
		'quote-props': [ 'error', 'consistent' ],
		'radix': [ 'error', 'as-needed' ],
		'react/jsx-tag-spacing': [
			'error',
			{
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
				beforeClosing: 'never'
			}
		],
		'react/react-in-jsx-scope': 'off',
		'security/detect-buffer-noassert': 'warn',
		'security/detect-child-process': 'error',
		'security/detect-disable-mustache-escape': 'warn',
		'security/detect-eval-with-expression': 'error',
		'security/detect-new-buffer': 'warn',
		'security/detect-no-csrf-before-method-override': 'warn',
		'security/detect-non-literal-fs-filename': 'warn',
		'security/detect-non-literal-regexp': 'warn',
		'security/detect-non-literal-require': 'warn',
		'security/detect-object-injection': 'warn',
		'security/detect-possible-timing-attacks': 'warn',
		'security/detect-pseudoRandomBytes': 'warn',
		'security/detect-unsafe-regex': 'warn',
		'unicorn/filename-case': [ 'error', { 'cases': { 'camelCase': true, 'kebabCase': true, 'pascalCase': true } } ]
	}
};
