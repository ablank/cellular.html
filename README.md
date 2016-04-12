# Cellular :: HTML Boilerplate
## Features
- CSS & Javascript (jQuery) UI component library designed for simple modification and maintenance with performance in mind.
- SASS (+ Compass) styling broken into logical partials.
- Grunt build process that simplifies development:
  - Compile sass to css.
  - Autoprefix & sort css styles.
  - Check javascript & concat to single file.
  - Minify all images, convert SVG to PNG as fallback for older browsers.

- % based grid provides fluid mobile friendly layout (ie6+ compatible) or use the flex grid for more modern approach.

## Getting started
Git clone or download and extract files to a location of your choice, i.e.

git clone [https://github.com/ablank/cellular.html.git](https://github.com/ablank/cellular.html.git)

### Installation
You will need node.js, ruby, sass, compass, and grunt available to build your project.

**Open a new terminal**

Linux: (Fedora, CentOS, RHEL): `dnf install nodejs npm ruby`

... or follow the installation instructions appropriate for your platform from  [node](https://nodejs.org/en/download/package-manager/) and [ruby](https://www.ruby-lang.org/en/documentation/installation/#package-management-systems).

Mac: Using [Homebrew](http://brew.sh/)  `brew install node ruby`

Windows: Download the appropriate installers for your platform from [nodejs](https://nodejs.org/en/download/) and [ruby](http://rubyinstaller.org/) and execute them.

Verify node & ruby are installed: `node -v`, `ruby -v`

_May need to restart terminal._

**_Install SASS + Compass:_** `gem install sass compass`

**_Install Grunt:_** `npm install -g grunt-cli`

Change to your project directory `cd /path/to/your/project`

Install Cellular: `npm install`

## Build your project
Open a terminal at your project's root directory:

  `grunt`: Rebuilds project entirely.

  `grunt dev`: Compile and check javascript.

  `grunt style`: Compile sass to css, autoprefix, sort, and minify stylesheets.

**_Only work in the `/src` directory!_**

When you build your project with the `grunt` command  from your project's root directory, optimized images, css, and js will be generated from `/src` and overwrite the existing files.

Grunt tasks are separated into individual files in the `/grunt` directory.

* [Aliases](https://www.npmjs.com/package/load-grunt-config): Defines tasks to run ('grunt dev, style, etc.').
* [Autoprefixer](https://www.npmjs.com/package/grunt-autoprefixer): Adds vendor prefixed styles.
* [Clean](https://www.npmjs.com/package/grunt-contrib-clean): Removes existing files from `/css` & `/js`.
* [Compass](https://www.npmjs.com/package/grunt-contrib-compass): Defines sass configuration - actual configuration file is kept externally to remain available if only using sass or compass is being used to compile `/grunt/config/compass.rb`.
* [Concat](https://www.npmjs.com/package/grunt-concat-language): Defines which scripts will be included in `lib.js` & `script.js`.
* [Concurrent](https://www.npmjs.com/package/grunt-concurrent): Defines tasks to run (kind-of) concurrently.
* [CriticalCSS](https://www.npmjs.com/package/grunt-criticalcss): Tests a page and generates css for above-the-fold styles.
* [CSSComb](https://www.npmjs.com/package/grunt-csscomb): Sorts styles according to the rules defined in `grunt/config/csscomb.json`
* [CSSMin](https://www.npmjs.com/package/grunt-contrib-cssmin): Minifies CSS, saved to `/css/min`.
* [ImageMin](https://www.npmjs.com/package/grunt-contrib-imagemin): Minifies gif, jpg, png, and svg images and icons.
* [JSHint](https://www.npmjs.com/package/grunt-contrib-jshint): Checks javascript for errors.
* [SVG2PNG](https://www.npmjs.com/package/grunt-svg2png): Renders SVG images as PNG.
* [Uglify](https://www.npmjs.com/package/grunt-contrib-uglify): Minifies javascript.
* [Watch](https://www.npmjs.com/package/grunt-contrib-watch): Defines which directories to watch for changes and the tasks to run on change.

## Styling
- SASS + Compass are used for preprocessing. Variables are centralized so they can be shared by multiple stylesheets (i.e. print styles match screen styles, etc.) Set in `src/sass/_variables.scss`, additional variables imported from `src/sass/variables`).
- The primary stylesheet (style.scss) should not have any styles- import styles from partials to maintain control over the order styles are applied. A partial .scss file should be created for each component, with the elements/classes that will be styled nested inside of the component wrapper class. If necessary use separate directories for component groups.

  BEM is too verbose and often too limited in scope for my liking- when compiled, nested component styles are very similar to BEM, but without the extra typing. In a nutshell, .panel.nav.a {} is preferred to .Panel__nav__link {}.
  - Styles are written in an effort to cascade as much as possible- this helps with maintaining consistency and keeping the file size slim.

- An aspect of the Cellular UI is adding modifier classes to the body tag based on page state. This provides the ability to implement event based styling (i.e. if the document is scrolled, a `scrolled` class is added to the <body>) and allows responsive designs on older browsers (back to IE7- lol).

## Scripting
- Scripts are compiled from `src/js/` to `js/lib.js` (for dependencies like jQuery) and `js/script.js` for executing plugins and other custom scripting. Add or remove files from the build in `grunt/concat.js`.

* Cellular UI provides a library of UI widgets that require minimal extra markup (*add a class to list... with some exceptions*) and rely on CSS for animating/transitioning based on state change with DOM class modifications (*i.e. click `.thing` and it becomes `.thing.active`*).

* Include the js one-liner in the <head> (@see index.html) for early javascript detection to minimize the flash of unstyled content.
