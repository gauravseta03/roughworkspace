var gulp=require('gulp');

var browserSync=require('browser-sync').create();


var port="3000";
gulp.task('watch',['browserSync'],function(){
    gulp.watch('app/*.html',browserSync.reload);
    gulp.watch('*.html',browserSync.reload);
	gulp.watch('app/**/*.*',browserSync.reload);
});



gulp.task('browserSync',function(){

	browserSync.init({
		server:true,
		port:port,
		reloadDelay:4000
	})
});