const { sep } = require('path');

const cwd = require('./cwd');

module.exports = (dir, relation = cwd) => {
    const regex = new RegExp(`\\${sep}$`);

    const _dir = dir.replace(regex, '');
    const _relation = relation.replace(regex, '');

    return _relation.endsWith(_dir);
};
