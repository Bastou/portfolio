const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const gutil = require('gulp-util'); //fonctions utilitaires pour les plugins Gulp

// Option autoprefixer
const autoprefixerOptions = {
    browsers: ['last 12 versions', '> 1%', 'Explorer >= 8', 'ie >= 8']
};

/* CSS
------------------------------------------*/

//Option Sass
const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded', //nested, expanded, compact, compressed
};

gulp.task('sass', function () {
  return gulp.src('./static/sass/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.autoprefixer(autoprefixerOptions))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./static/css'))
    .on('end', function(){
        gutil.log('La tâche SASS est terminée.');
    });
});

gulp.task('sass:watch', function () {
  gulp.watch('./static/sass/**/*.scss', ['sass']);
});

/* JS
------------------------------------------*/

gulp.task('jslint', function () {
    return gulp.src(['./static/js/**/*.js'])
            .pipe($.jslint({ /* this object represents the JSLint directives being passed down */ }))
            .pipe($.jslint.reporter( 'default' ));
});

//script paths
var jsVendorFiles = './static/js/vendor/*.js',
      jsDest = './static/js/dist';

gulp.task('vscripts', function() {
    return gulp.src(jsVendorFiles)
        .pipe($.concat('lib.js'))
        .pipe(gulp.dest(jsDest))
        .pipe($.rename('lib.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('mainjs', function() {
    return gulp.src('./static/js/main.js')
        .pipe($.rename('main.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('tesljs', function() {
    return gulp.src('./static/js/third-eye-sleeper-loader.js')
        .pipe($.rename('third-eye-sleeper-loader.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('js:watch', function () {
  gulp.watch('./static/js/*.js', ['mainjs', 'tesljs']);
});

/* IMG
------------------------------------------*/

gulp.task('img', function ()  {
  return gulp.src('./img/**/*')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest('./img'));
});


/* DEFAULT
 ------------------------------------------*/
gulp.task('default', ['sass:watch', 'js:watch']);