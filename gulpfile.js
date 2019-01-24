/*
install 
1. skapa mappar 
2. kÃ¶r bower init. fyll i allt optional
3. installera foundation: bower install foundation --save -dev
4. npm init
5. npm install --save-dev gulp gulp-sass gulp-autoprefixer gulp-rename gulp-clean-css gulp-sourcemaps webpack-stream gulp-concat gulp-uglify
6. skapa gulpfile.js nedan med länkar till bower foundation
*/


var gulp = require('gulp'),
    sass = require('gulp-sass'),	
    autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
    minifycss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
    webpack = require('webpack-stream'),
    uglify = require('gulp-uglify'),   
    path = require('path');

	/*
	sÃ¤tter sÃ¶kvÃ¤gar till mapptrÃ¤det
	*/
	var srcPath={		
		'scss': './_dev/devsass',	
		'publik': './public',
		'devjs': './_dev/devjs',
		'jsbundle': './_dev/dev_jsbundle'
	}
	
	
gulp.task('SassToCssSrc', function() {
    gulp.src(srcPath.scss +'/**/*.scss')  
        .pipe(sass().on('error', sass.logError))		
		.pipe(sourcemaps.write())
        .pipe(gulp.dest(srcPath.publik +'/css/'));
		
});

gulp.task('SassToCssSrcPub', function () {
    gulp.src(srcPath.scss +'/**/*.scss')
    .pipe(sass({
            style: 'compressed',
            sourceComments: 'false'
		}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // pass the file through autoprefixer 
	.pipe(rename({ suffix: '.min' }))
    //.pipe(cleanCSS())
	.pipe(gulp.dest(srcPath.publik + '/css/'));
    
});

gulp.task('webpackjs', function() {
    return gulp.src(srcPath.scss +'/app.js')
    .pipe(webpack( require('./config/webpack.config.js') ))
    .pipe(gulp.dest(srcPath.publik +'/'));	
});

gulp.task('jsconcatfiles', ['webpackjs'], function () {
    return gulp.src(srcPath.jsbundle + '/**/*.js')
        .pipe(sourcemaps.init())
      .pipe(concat('kk_aj_bundle.js'))
        .pipe(sourcemaps.write())
      .pipe(gulp.dest(srcPath.publik + '/js/'));
});

gulp.task('jspublicera', ['webpackjs'], function () {
    return gulp.src(srcPath.jsbundle + '/**/*.js')
        .pipe(uglify())
        //.pipe(sourcemaps.init())
        .pipe(concat('kk_aj_bundle.js'))
        //.pipe(sourcemaps.write())
      .pipe(gulp.dest(srcPath.publik + '/js/'));
});
//Watch task
gulp.task('default',function() {
    //gulp.watch('_dev/devsass/**/*.scss', ['SassToCssSrc']); 
    gulp.watch('_dev/devjs/**/*.js', ['jsconcatfiles']);
   
});

gulp.task('publicera',function() {
    //gulp.watch(srcPath.scss + '/**/*.scss', ['SassToCssSrcPub']);
    gulp.watch('_dev/devjs/**/*.js', ['jspublicera']);
});
