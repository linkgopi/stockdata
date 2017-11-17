var CONSTANTS = require('../constants'),
    testData = require('../test-data'),
    globals = {};

module.exports = {
    'Navigate to "Verify Simulation"': function (client) {
        client
            .url(CONSTANTS.StockData_PROD_URL)
            .waitForElementVisible('.company__name', CONSTANTS.MICRO_TIMEOUT)
            .assert.containsText('.company__name', "Bitcoin USD")
            .waitForElementVisible('[field="Last"]', CONSTANTS.MINI_TIMEOUT)
            .assert.valueContains('[field="Last"]', "6,432.60")
            .pause(2000)
            .end();
    }
};