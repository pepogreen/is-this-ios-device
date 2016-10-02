var should = require('chai').should(),
    checkDevice = require('../index'),
    checkiOSDevice = checkDevice.checkThisDevice;
    
describe('#checkiOSDevice', function() {
  it('return whether its an iOS Device', function() {
    //checkiOSDevice().should.equal(/iphone|ipod|ipad/);
    console.log("window object won't be available here, should run in browser itself.");
  });
});