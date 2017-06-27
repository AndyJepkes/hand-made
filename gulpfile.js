require('./gulp/tasks/styles');
require('./gulp/tasks/watch');

var gulp = require('gulp');


gulp.task('default', function(){
    gulp.start('styles');
    gulp.start('watch');
});


