// install npm install --save-dev gulp
const gulp = require('gulp');
//const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
//const download = require('gulp-download');
const preprocessor = require('gulp-c-preprocessor');
// for images
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminZopfli = require('imagemin-zopfli');
const imageminMozjpeg = require('imagemin-mozjpeg'); //need to run 'brew install libpng'
const imageminGiflossy = require('imagemin-giflossy');


//
// Tasks
//

/*
//
// Download vendor libs
//
gulp.task('download', () => {
  return download(paths.vendor)
    .pipe(gulp.dest('js'));
});
*/
//gulp.task('sass', function () {
//    return gulp.src('assets/scss/**/*.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('dist-gulp/css'));
//});

gulp.task('css', () => {
  return gulp.src([
    'src/css/seamless.css',
    'src/css/vectrex.css',
    'src/css/rtm.css',
    'src/css/touch.css'
      ])
      //.pipe(concat('styles.min.css'))
      .pipe(cleanCSS())
      .pipe(gulp.dest('deploy/css'));
});

gulp.task('prec', () => {
  return gulp.src([
    'src/preprocess/e6809.js',
    //'src/preprocess/e8910.js',
    'src/preprocess/vecx.js'
      ])
      .pipe(preprocessor({
      	// Predefined constants (ex: { "MY_CONST": "42" })
      	constants: {},
      	// Predefined macros (ex: { "MACRO": "(a,b) a+b" })
      	macros: {},
      	// End of line character
      	newLine: '\n',
      	// Escape '//#' & '/*#' comments (see extra/comments)
      	commentEscape: true,
      	// Empty lines to add between code and included files
      	includeSpaces: 0,
      	// Limit of empty following lines (0 = no limit)
      	emptyLinesLimit: 0,
      	// Base path for including files
      	basePath: './',
      	// Stop the compiler when an error ocurred ?
      	stopOnError: true,
      	// Must constants in #enum directive be in hexadecimal ?
      	enumInHex: true
      }))
      .pipe(gulp.dest('src/processed'));
});

gulp.task('js', () => {
  //return gulp.src('src/js/**/*.js')
  gulp.src('src/js/seamless.js')
    .pipe(uglify())
    .pipe(gulp.dest('deploy/js'))

  gulp.src('src/js/rtm.js')
    .pipe(uglify())
    .pipe(gulp.dest('deploy/js'))

  return gulp.src([
    'src/js/utils.js',
    'src/js/globals.js',
    'src/processed/e6809.js',
    //'src/processed/e8910.js',
    'src/js/e8910.js',
    'src/js/osint.js',
    'src/js/vector_t.js',
    'src/processed/vecx.js',
    'src/js/input.js',
    'src/js/dnd.js',
    'src/js/table.js',
    'src/js/hexMon.js',
    'src/js/cocktail.js',
    'src/js/romList.js',
    'src/js/UZIP.depacker_pack_20200308.js',
    //'src/js/rtm.js'
    //'src/js/vectrex.js'
      ])
      .pipe(concat('jsvecx.js'))
      //.pipe(gulp.dest('src/tmp'))
      .pipe(uglify())
      .pipe(gulp.dest('deploy/js'));
});

//
// compress images
//
// https://gist.github.com/LoyEgor/e9dba0725b3ddbb8d1a68c91ca5452b5
gulp.task('img', () => {
  return gulp.src(['src/img/**'])
    .pipe(cache(imagemin([
      //png
      imageminPngquant({
        speed: 1,
        quality: [0.95, 1] //lossy settings
      }),
      imageminZopfli({
        more: true
        // iterations: 50 // very slow but more effective
      }),

      //gif
      // imagemin.gifsicle({
      //     interlaced: true,
      //     optimizationLevel: 3
      // }),
      //gif very light lossy, use only one of gifsicle or Giflossy
      imageminGiflossy({
        optimizationLevel: 3,
        optimize: 3, //keep-empty: Preserve empty transparent frames
        lossy: 2
      }),

      //svg
      imagemin.svgo({
        plugins: [{
          removeViewBox: false
        }]
      }),

      //jpg lossless
      imagemin.jpegtran({
        progressive: true
      }),
      //jpg very light lossy, use vs jpegtran
      imageminMozjpeg({
        quality: 90
      })
    ])))
    .pipe(gulp.dest('deploy/img'));
});

gulp.task('roms', () => {
  return gulp.src('src/roms/**/*')
    .pipe(gulp.dest('deploy/roms'));
});
gulp.task('bios', () => {
  return gulp.src('src/bios/**/*')
    .pipe(gulp.dest('deploy/bios'));
});
gulp.task('vendor', () => {
  return gulp.src([
    'src/js/jquery-min.js',
    'src/js/jszip.min.js'
  ])
  .pipe(gulp.dest('deploy/js'));
});

gulp.task('html', () => {
  return gulp.src([
    'src/seamless.html',
    'src/vectrex.html',
    'src/rtm.html',
    'src/overlay_rtm.html',
    'src/overlay_touch.html',
    'src/manifest.json'
      ])
      .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
      .pipe(gulp.dest('deploy'));
});

gulp.task('mono', () => {
  return gulp.src([
    'src/seamless_mono1.html',
    'deploy/css/seamless.css',
    'src/seamless_mono2.html',
    'deploy/js/jsvecx.js',
    'src/seamless_mono3.html',
    'deploy/js/seamless.js',
    'src/seamless_mono4.html',
      ])
      .pipe(concat('index.html'))
      .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
      .pipe(gulp.dest('deploy'));
});

gulp.task('copyright', () => {
  return gulp.src(['deploy/index.html','src/copyright.txt'])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('deploy'));
});

gulp.task('watch', () => {
  gulp.watch('src/css', { events: 'all', delay: 500 }, gulp.series('css','mono','copyright'));
  gulp.watch('src/js', { events: 'all', delay: 500 }, gulp.series('js','mono','copyright'));
  gulp.watch('src/preprocess', { events: 'all', delay: 500 }, gulp.series('prec','js','mono','copyright'));
  gulp.watch('src/roms', { events: 'all', delay: 500 }, gulp.series('roms'));
  gulp.watch('src/img', { events: 'all', delay: 500 }, gulp.series('img'));
  gulp.watch('src/*.{txt,html}', { events: 'all', delay: 500 }, gulp.series('html','mono','copyright'));
});

//gulp.task('assets', gulp.parallel('roms', 'bios', 'img', 'vendor'));
gulp.task('assets', gulp.parallel('roms', 'bios', 'img'));
gulp.task('default', gulp.series('prec', 'assets', 'css', 'js', 'html', 'mono', 'copyright'));
