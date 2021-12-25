const Calculator = require('../calculator.js');

describe('Calculator', () => {
    let cal;

    beforeEach(()=>{
        const cal = new Calculator();
    });


    it('inits with 0', () => {
        expect(cal.value).toBe(0);
    });

    it('sets', () => {
        cal.set(9);

        expect(cal.value).toBe(9);
    });

    it('clear', () => {
        cal.set(9);
        cal.clear();

        expect(cal.value).toBe(9);
    });

    it('adds', () => {
        cal.set(1);
        cal.add(2);

        expect(cal.value).toBe(3);
    });

    it('substract', () => {
        cal.substract(1);

        expect(cal.value).toBe(-1);
    });

    describe('divides', () => {
        it('0 / 0 === NaN', () => {
            cal.divide(0);
            expect(cal.value).toBe(NaN);
        });

        it('1 / 0 === Infinity', () => {
            cal.set(1);
            cal.divide(0);
            expect(cal.value).toBe(Infinity);
        });

        
        it('4 / 4 === 1', () => {
            cal.set(4);
            cal.divide(4);
            expect(cal.value).toBe(1);
        });
    });
});