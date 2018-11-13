import gulp from 'gulp';
import lpForm from '../../src/php/lp-form/';

gulp.task('lpForm', () => {
	lpForm.dest('./dest/api')
});