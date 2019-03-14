import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps'
import plumber from 'gulp-plumber';
import mqpacker from 'css-mqpacker';
import sortCSSmq from 'sort-css-media-queries';
import browserSync from 'browser-sync';
import paths from '../config';

gulp.task('sass', () => {
	return gulp.src(paths.sass_src)
	.pipe(sourcemaps.init())
	.pipe(plumber())
	.pipe(sass({
		outputStyle: 'expanded'
	}).on('error', sass.logError))
	.pipe(postcss([
		mqpacker({
			sort: sortCSSmq
		}),
		autoprefixer({
			remove: false
		})
	]))
	.on('error', function(err) {
			console.log(err.message);
		})
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(paths.sass_dest))
	.pipe(browserSync.stream())
});