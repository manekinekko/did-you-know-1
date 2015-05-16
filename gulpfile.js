var gulp   = require('gulp');
var tsc    = require('gulp-tsc');
var shell  = require('gulp-shell');
var runseq = require('run-sequence');
var pkg    = require('./package.json');


var paths = {
	all: [
		'app/**',
		'!app/script/**',
		'!app/js',
		'!app/js/**'
	],
	tscripts : { 
		src : ['app/**/*.ts'],
		dest : 'dist/',
		dev : 'app/' 
	}
};

var tscsize = function(){
	return tsc({
		module: "commonjs",
		emitError: false,
		sourceMap: false,
		declaration: true,
		target: 'ES5',
		out: 'script/application.js'
	});
};

// ** Watching ** //

gulp.task('watch', function () {
	gulp.watch(paths.tscripts.src, ['compile:dev']);
});

// ** Compilation ** //

gulp.task('build', ['compile:prod', 'copy']);

gulp.task('compile:prod', function () {
	return gulp
	.src(paths.tscripts.src)
	.pipe(tscsize())
	.pipe(gulp.dest(paths.tscripts.dest));
});
gulp.task('compile:dev', function () {
	return gulp
	.src(paths.tscripts.src)
	.pipe(tscsize())
	.pipe(gulp.dest(paths.tscripts.dev));
});
gulp.task('copy', function() {
	return gulp
	.src(paths.all)
	.pipe(gulp.dest(paths.tscripts.dest));
});

gulp.task('default', ['build']);