var assert = require('assert');

var data = require("../event.json")

var context = {
    invokeid: 'invokeid',
    done: function(err,message){
        return;
    }
};

describe('myFirstLambda',function(){
    it('Should have event as a property', function(){
        var lambda = require("../index");
        lambda.handler(data,context);
        assert(lambda.event);
        assert.deepEqual(data,lambda.event);
    });
});