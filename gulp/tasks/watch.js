var gulp = require('gulp');
var browserSync = require('browser-sync').create();

browserSync.init({
    server: {
        baseDir: "app"
    }
});

// Update browser with CSS changes 
gulp.task('cssInject', function() {
    return gulp.src('./app/temp/styles/main.css')
        .pipe(browserSync.stream());
});

// Watch files for changes
gulp.task('watch', function(){
    gulp.watch('./app/index.html', function(){
        browserSync.reload();
    });
    
    gulp.watch('./app/temp/styles/main.css', function(){
        gulp.start('cssInject');
    });
    
    gulp.watch('./app/assets/styles/**/*.less', function(){
        gulp.start('styles');
    });
});