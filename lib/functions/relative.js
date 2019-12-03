const { sep } = require('path');

const cwd = require('./cwd');

/**
 * Returns the relative path from `relation` to `dir`.
 *
 * @param {string} dir Path to resolve
 * @param {string} relation Path to resolve from
 * @returns {string} Relative path
 */
module.exports = (dir, relation = cwd) => {
    const regex = new RegExp(`^\\${sep}`);
    return dir.replace(relation, '').replace(regex, '');
};
