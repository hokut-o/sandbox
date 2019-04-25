var gulp = require("gulp");
var sass = require("gulp-sass");
sass.compiler = require("node-sass");

gulp.task("sass",function() {
	return gulp.src("./src/sass/**/*.sass")
	.pipe(sass().on("error",sass.logError))
	.pipe(sass({outputStyle:"expanded"}))
	.pipe(gulp.dest("./dest/css"))
});