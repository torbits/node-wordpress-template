var gulp = require('gulp');
var browserSync = require('browser-sync');
var connectPHP = require('gulp-connect-php');

gulp.task('watch-site', function() {
	gulp.watch('./wordpress/**/*.*', browserSync.reload);
});

gulp.task('watch-content', function() {
	gulp.watch('./wordpress/wp-content/**/*.*', browserSync.reload);
})

gulp.task('browserSync', function() {
    browserSync({
        proxy: '127.0.0.1:3000',
        port: 3001
    });
});

gulp.task('php', function(){
    connectPHP.server({ base: './wordpress', keepalive: true, hostname: 'localhost', port: 3000, open: false});
});

gulp.task('default', ['browserSync', 'php', 'watch-content']);