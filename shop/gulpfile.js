const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const spritesmith = require('gulp.spritesmith');
const rimraf = require('rimraf');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat');
const include = require("gulp-include");
const uglify = require("gulp-uglify");

// Server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      port: 3000,
      baseDir: "dist"
    }
  });
  gulp.watch('dist/**/*').on('change', browserSync.reload);
});

// Pug compile
gulp.task('views', function buildHTML() {
  return gulp.src('src/views/index.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist'))
});

// Styles compile
gulp.task('sass', function () {
  return gulp.src('src/styles/main.scss')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    //.pipe(rename('main.min.css'))
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Sprite
gulp.task('sprite', function(callback) {
  const spriteData = gulp.src('src/images/icons/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: '../images/sprite.png',
    cssName: 'sprite.scss'
  }));

  spriteData.img.pipe(gulp.dest('dist/images/'));
  spriteData.css.pipe(gulp.dest('src/styles/global/'));
  callback();
});

//  Delete
gulp.task('clean', function del(callback) {
  return rimraf('dist', callback);
});

// Copy fonts
gulp.task('copy:fonts', function() {
  return gulp.src('./src/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));
});

// Copy images
gulp.task('copy:images', function() {
  return gulp.src('./src/images/**/*.*')
    .pipe(gulp.dest('dist/images'));
});

// JS
gulp.task('js', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    'src/js/main.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(include({
    extensions: "js",
    hardFail: true,
  }))
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/js'))
});

// Copy
gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images'));

// Watchers
gulp.task('watch', function() {
  gulp.watch('src/views/**/*.pug', gulp.series('views'));
  gulp.watch('src/styles/**/*.scss', gulp.series('sass'));
  gulp.watch('src/js/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('views', 'sass', 'js', 'sprite', 'copy'),
  gulp.parallel('watch', 'browser-sync')
  )
);