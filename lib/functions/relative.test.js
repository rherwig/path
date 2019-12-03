const { join } = require('path');

const relative = require('./relative');

describe('relative', () => {
    it('returns relative path to cwd', () => {
        const dir = join('/', 'var', 'test', 'sub', 'dir');
        const expected = join('sub', 'dir');
        const result = relative(dir);

        expect(result).toBe(expected);
    });

    it('returns relative path to passed directory', () => {
        const dir = join('/', 'var', 'test', 'sub', 'dir');
        const relation = join('/', 'var');
        const expected = join('test', 'sub', 'dir');
        const result = relative(dir, relation);

        expect(result).toBe(expected);
    });
});
