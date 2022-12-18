module.exports = {
    plugins: ['stylelint-scss'],
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recess-order',
    ],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'color-function-notation': "legacy",
        'scss/no-global-function-names': null,
    },
};
