const { join, sep } = require('path');

const endsWith = require('./ends-with');

describe('endsWith', () => {
    it('checks if path ends with single passed dir', () => {
        expect(endsWith('test')).toBe(true);
    });

    it('checks if path ends with nested passed dirs', () => {
        const dir = join('var', 'test');

        expect(endsWith(dir)).toBe(true);
    });

    it('treats trailing seps accordingly', () => {
        const dir = join('var', 'test', sep);

        expect(endsWith(dir)).toBe(true);
    });
});
