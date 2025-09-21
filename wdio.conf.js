const { join } = require('path');

exports.config = {
    runner: 'local',
    specs: [
        './tests/**/*.test.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: "iOS",
        'appium:platformVersion': "17.0",
        'appium:deviceName': "iPhone 15",
        'appium:automationName': "XCUITest",
        'appium:app': join(process.cwd(), './app/LojaEBAC-sim.app'),
        'appium:noReset': true
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],
    services: ['appium'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
