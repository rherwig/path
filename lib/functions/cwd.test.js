const { join } = require('path');

const cwd = require('./cwd');

describe('cwd', () => {
    it('returns current working directory', () => {
        const expected = join('/', 'var', 'test');

        expect(cwd).toBe(expected);
    });
});
