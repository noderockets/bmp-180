var Bmp180 = require('./bmp180');

// Instantiate and initialize.
var sensor = new Bmp180({ debug: true });

function testRead() {
  sensor.read(function(data) {
    console.log(data);
  });
}

(function test() {
  testRead();
})();