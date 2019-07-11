const assert = require('assert');
const {
    findNumberWordCombination,
    generateVariation,
    inserting
} = require('../../src/utils/es6exam01.js');

describe('findNumberWordCombination', function () {

    it('findNumberWordCombination', function () {
        const matchedStrings = findNumberWordCombination('Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options')
        console.log(matchedStrings)
        assert.notEqual(matchedStrings.indexOf('132cxvx'), -1)
        assert.notEqual(matchedStrings.indexOf('mic7979'), -1)
        assert.notEqual(matchedStrings.indexOf('m98opt'), -1)
    });
});



describe('generateVariation', function () {

    it('generateVariation', function () {
        const matchedStrings = findNumberWordCombination('Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options')
        const variations2 = generateVariation(matchedStrings);
        console.log(variations2)
        assert.notEqual(variations2.indexOf('132-cxvx'), -1)
        assert.notEqual(variations2.indexOf('mic-7979'), -1)
        assert.notEqual(variations2.indexOf('m-98opt'), -1)
        assert.notEqual(variations2.indexOf('m-98-opt'), -1)
        assert.notEqual(variations2.indexOf('m98-opt'), -1)
    });
});

describe('inserting', function () {

    it('inserting', function () {
        const variationss = inserting('m98opt')
        console.log(variationss);
        assert.notEqual(variationss.indexOf('m-98opt'), -1)
        assert.notEqual(variationss.indexOf('m-98-opt'), -1)
        assert.notEqual(variationss.indexOf('m98-opt'), -1)
    });
});


