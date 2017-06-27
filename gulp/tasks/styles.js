var gulp = require('gulp');
var less = require('gulp-less');

// Compile less files
gulp.task('styles', function(){
    gulp.src('./app/assets/styles/less/main.less')
    .pipe(less())
    .on('error', function(e){
        console.log(e.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});