const path = require('./index');

describe('path', () => {
    it('exposes cwd variable', () => {
        expect(path.cwd).toBeDefined();
    });

    it('exposes relative function', () => {
        expect(typeof path.relative).toBe('function');
    });

    it('exposes endsWith function', () => {
        expect(typeof path.endsWith).toBe('function');
    });
});
