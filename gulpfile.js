var gulp = require('gulp');

gulp.task('html', function(){
    console.log("Cool HTML stuff just happened!");    
});

gulp.task('css', function(){
    console.log("Cool CSS stuff just happened!");    
});

gulp.task('default', function(){
    console.log("gulpin' like a boss!");

    gulp.watch('./app/index.html', function(){
        gulp.start('html');
    });

    gulp.watch('./app/assets/styles/*.css', function(){
        gulp.start('css');
    });
    
});