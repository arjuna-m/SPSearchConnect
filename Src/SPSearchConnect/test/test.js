var assert = require("assert");
var spsearchConnect = require("../spSearchConnect.js");
var spConnect = new spsearchConnect();

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
});


describe('SPSearchConnection', function () {
    describe('#performSearch()', function () {
        it('should return zero or more results', function () {
            assert.equal('abcd', spConnect.performSearch('abcd'));
        });
    });
});

//    describe('#performSearch()', function () {
//        it('should return zero or more results', function () {
//            //var spSearchConnect = require('../index');
//            //alert(spSearchConnect);
//            chai.assert.equal(-1, [1, 2, 3].indexOf(5));
//        });
//    });
//});



//alert("1");
//alert(spSearchConnect);
//spSearchConnect.performSearch("abcd");