import gulp from "gulp"
import sass from "gulp-sass"

gulp.task("sass",() => {
	return gulp.src("./src/sass/**/*.sass")
	.pipe(sass().on("error",sass.logError))
	.pipe(sass({outputStyle:"expanded"}))
	.pipe(gulp.dest("./dest/css"))
});