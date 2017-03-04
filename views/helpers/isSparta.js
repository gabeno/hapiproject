var _ = require('lodash'),
    isSparta;

isSparta = function(options, context) {
    options = options || {};

    if (_.isEqual(options, 'sparta')) {
        return 'This is sparta!';
    }
    return 'No sparta today!'
}

module.exports = isSparta;
