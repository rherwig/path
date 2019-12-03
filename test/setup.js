const path = require('path');

global.process.cwd = () => path.join('/', 'var', 'test');
