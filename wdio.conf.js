const { join } = require('path');

exports.config = {
  runner: 'local',
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',
  specs: [
    './tests/**/*.test.js'
  ],
  maxInstances: 1,
  capabilities: [{
    platformName: 'iOS',
    'appium:platformVersion': '17.0',
    'appium:deviceName': 'iPhone 15',
    'appium:automationName': 'XCUITest',
    'appium:app': join(process.cwd(), './app/LojaEBAC-sim.app'),
    'appium:noReset': true
  }],
  services: ['appium'],
  framework: 'mocha',
  mochaOpts: {
    timeout: 60000
  }
}
