import Es6 from '../src/es6';

describe('ES6 Polygon', function() {
  let es6 = new Es6(5, 4);

  it('should return 20 when calling calcArea', function() {

    assert.equal(20, es6.calcArea());
  });
});

