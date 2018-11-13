import gulp from 'gulp';

module.exports = {
    dest: function (dir) {
        /**
         * src を destへ
         */
        gulp.src([`${__dirname}/**`, `!${__dirname}/index.js`, `!${__dirname}/[^_]*.example`])
            .pipe(gulp.dest(dir));

        /**
         * .htaccessを書込み
         */
        gulp.src([`${__dirname}/.htaccess`])
            .pipe(gulp.dest(dir));
    },
};