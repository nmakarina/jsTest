// jest.config.js
module.exports = {

    reporters: ['default', 'jest-allure'],
    testRunner: 'jest-jasmine2',
    setupFilesAfterEnv: ['./jest.setup.js',
    'jest-allure/dist/setup']
};
