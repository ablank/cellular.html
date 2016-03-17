/**
 * @file
 * Configure grunt compass.
 *
 * OutputStyle: expanded | nested | compact | compressed
 */

module.exports = {
    base: {
        expand: true,
        cwd: 'css',
        src: ['**/*.css', '!**/*.min.css'],
        dest: 'css/min',
        ext: '.min.css'
    },
};
