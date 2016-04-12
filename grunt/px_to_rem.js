/**
 * @file
 * Configure grunt compass.
 *
 * OutputStyle: expanded | nested | compact | compressed
 */

module.exports = {
  all: {
      options: {
        base: 16,
        fallback: false,
        fallback_existing_rem: false,
        ignore: [
          'height',
          'width',
          'border',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
        ],
        map: false
      },
      files: {
        'css/style.css': ['css/style.css']
      }
    }
};
