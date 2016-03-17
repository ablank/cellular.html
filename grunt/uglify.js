/**
 * @file
 * Configure grunt uglify.
 */

module.exports = {
  options: {
    compress: true,
    beautify: false,
    preserveComments: 'some',
    wrap: true
            // screwIE8: true
  },
  prep: {
    files: [{
        expand: true,
        cwd: 'src/js',
        src: [
          '*.js',
          '!*.min.js'
        ],
        dest: 'src/js/min'
      }]
  },
  prod: {
    files: {
      'js/script.min.js': ['js/script.js']
    }
  }
};
