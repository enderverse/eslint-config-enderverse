'use strict';

module.exports = {
	env: {
		es2020: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	plugins: [ 'unicorn' ],
	rules: {
		'array-bracket-spacing': [ 'error', 'always' ],
		'arrow-parens': [ 'error', 'always' ],
		'brace-style': [ 'error', 'stroustrup', { allowSingleLine: true } ],
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
		'unicorn/better-regex': [ 'error' ],
		'unicorn/catch-error-name': [ 'error' ],
		'unicorn/consistent-function-scoping': [ 'error' ],
		'unicorn/custom-error-definition': [ 'error' ],
		'unicorn/error-message': [ 'error' ],
		'unicorn/escape-case': [ 'error' ],
		'unicorn/expiring-todo-comments': [ 'error' ],
		'unicorn/explicit-length-check': [ 'error' ],
		'unicorn/filename-case': [ 'error', { 'cases': { camelCase: true, kebabCase: true, pascalCase: true } } ],
		'unicorn/import-index': [ 'error' ],
		'unicorn/new-for-builtins': [ 'error' ],
		'unicorn/no-abusive-eslint-disable': [ 'error' ],
		'unicorn/no-array-instanceof': [ 'error' ],
		'unicorn/no-console-spaces': [ 'error' ],
		'unicorn/no-fn-reference-in-iterator': [ 'error' ],
		'unicorn/no-for-loop': [ 'error' ],
		'unicorn/no-hex-escape': [ 'error' ],
		'unicorn/no-keyword-prefix': 'off',
		'no-nested-ternary': 'off',
		'unicorn/no-nested-ternary': [ 'error' ],
		'unicorn/no-new-buffer': [ 'error' ],
		'unicorn/no-null': 'off',
		'unicorn/no-process-exit': [ 'error' ],
		'unicorn/no-reduce': [ 'error' ],
		'unicorn/no-unreadable-array-destructuring': [ 'error' ],
		'unicorn/no-unsafe-regex': 'off',
		'unicorn/no-unused-properties': 'off',
		'unicorn/no-useless-undefined': [ 'error' ],
		'unicorn/no-zero-fractions': [ 'error' ],
		'unicorn/number-literal-case': [ 'error' ],
		'unicorn/prefer-add-event-listener': [ 'error' ],
		'unicorn/prefer-dataset': [ 'error' ],
		'unicorn/prefer-event-key': [ 'error' ],
		'unicorn/prefer-flat-map': [ 'error' ],
		'unicorn/prefer-includes': [ 'error' ],
		'unicorn/prefer-modern-dom-apis': [ 'error' ],
		'unicorn/prefer-negative-index': [ 'error' ],
		'unicorn/prefer-node-append': [ 'error' ],
		'unicorn/prefer-node-remove': [ 'error' ],
		'unicorn/prefer-number-properties': [ 'error' ],
		'unicorn/prefer-optional-catch-binding': [ 'error' ],
		'unicorn/prefer-query-selector': [ 'error' ],
		'unicorn/prefer-reflect-apply': [ 'error' ],
		'unicorn/prefer-replace-all': 'off',
		'unicorn/prefer-set-has': [ 'error' ],
		'unicorn/prefer-spread': [ 'error' ],
		'unicorn/prefer-starts-ends-with': [ 'error' ],
		'unicorn/prefer-string-slice': [ 'error' ],
		'unicorn/prefer-text-content': [ 'error' ],
		'unicorn/prefer-trim-start-end': [ 'error' ],
		'unicorn/prefer-type-error': [ 'error' ],
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/string-content': 'off',
		'unicorn/throw-new-error': [ 'error' ]
	}
};
