var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('html', function(){
    console.log("Cool HTML stuff just happened!");    
});

gulp.task('styles', function(){
    gulp.src('./app/assets/styles/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./app/temp/styles'));

    console.log("Cool CSS stuff just happened!");    
});

gulp.task('default', function(){
    console.log("gulpin' like a boss!");
    gulp.start('styles');

    gulp.watch('./app/index.html', function(){
        gulp.start('html');
    });

    gulp.watch('./app/assets/styles/**/*.less', function(){
        gulp.start('styles');
    });

});