var config = require('./gulp.config')();

var port = process.env.PORT || config.defaultPort;

var gulp = require('gulp');
var scss = require('gulp-sass');
var exec = require('child_process').exec;

gulp.task('tsc', function (cb) {
    exec('npm run tsc:w', function (err, stdout, stderr) {
      cb(err);
    });
});

gulp.task('server', function (cb) {
  exec('npm run lite', function (err, stdout, stderr) {
    cb(err);
  });
});

gulp.task('styles', [], function () {
    return gulp
        .src(config.scss)
        .pipe(scss())
        .pipe(gulp.dest(config.client + '/styles/'));
})

 gulp.task('watch', function () {
     function reportChange(event){
        console.log('Event type: ' + event.type); // added, changed, or deleted
        console.log('Event path: ' + event.path); // The path of the modified file
    }

    gulp.watch('./src/**/**.scss', ['styles']).on('change', reportChange);
 })

gulp.task('dev', ['tsc', 'server', 'watch']);

gulp.task('default', ['dev']);
