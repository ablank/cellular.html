/**
 * @file
 * Configure grunt svg2png.
 */

module.exports = {
  images: {
    files: [
      {
        cwd: 'src/assets/images/svg',
        src: ['*.svg'],
        dest: 'assets/images/png'
      }
    ]
  },
  icons: {
    files: [
      {
        cwd: 'src/assets/icons/svg',
        src: ['*.svg'],
        dest: 'assets/icons/png'
      }
    ]
  }
  /*
   favicons: {
   files: [
   {
   cwd: 'src/assets/favicons/',
   src: ['apple-touch-icon.svg'],
   dest: 'test/favicons/',
   size: [
   144,
   114,
   96,
   95
   ]
   }
   ]
   }
   */
};
