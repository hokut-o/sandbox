import gulp from 'gulp';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import del from 'del';
import watch from 'gulp-watch'
import paths from '../config';

gulp.task('reload', () => {
	browserSync.reload();
});

gulp.task('imageClean', () => {
	del(paths.img_dest + '**/*.*');
});

gulp.task('imageCopy', () => {
	return gulp.src('./src/img/**/*.*')
	.pipe(gulp.dest(paths.img_dest));
});

gulp.task('pdfClean', () => {
	del(paths.pdf_dest + '**/*.*');
});

gulp.task('pdfCopy', () => {
	return gulp.src('./src/pdf/**/*.*')
	.pipe(gulp.dest(paths.pdf_dest));
});

gulp.task('pugDest', (cb) => {
	return runSequence(
		'setWatch',
		'pug',
		cb
	);
});

gulp.task('imageDest', (cb) => {
	return runSequence(
		'imageClean',
		'imageCopy',
		'reload',
		cb
	);
});

gulp.task('pdfDest', (cb) => {
	return runSequence(
		'pdfClean',
		'pdfCopy',
		'reload',
		cb
	);
});

gulp.task('lpFormDest', (cb) => {
	return runSequence(
		'lpForm',
		'reload',
		cb
	);
});

gulp.task("watch", () => {
	watch([`src/js/**/*`], () => {gulp.start("webpack");});
	watch([`src/stylus/**/*`], () => {gulp.start("stylus");});
	watch([`src/sass/**/*`], () => {gulp.start("sass");});
	watch([`src/pug/**/*`, `src/yaml/**/*`], () => {gulp.start("pugDest");});
	watch([`src/img/**/*`], () => {gulp.start("imageDest");});
	watch([`src/pdf/**/*`], () => {gulp.start("pdfDest");});
	watch([`src/php/lp-form/**/*`], () => {gulp.start("lpFormDest");});
});