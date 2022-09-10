const Car = require( "../lib/Car");

describe('car', function(){
    it('getColor', function(){
        
    var michellsCar = new Car('red', 'subaru', 'outback');
        expect(michellsCar.getColor()).toBe('silver');
    })
})