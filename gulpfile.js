const config = require('./gulp.config')();
const tscConfig = require('./tsconfig.json');

const port = process.env.PORT || config.defaultPort;

const gulp = require('gulp');
const scss = require('gulp-sass');
const typeScript = require('gulp-typescript');
const exec = require('child_process').exec;
const del = require('del');


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
});

 gulp.task('watch', function () {
     function reportChange(event){
        console.log('Event type: ' + event.type); // added, changed, or deleted
        console.log('Event path: ' + event.path); // The path of the modified file
    }

    gulp.watch('./src/**/**.scss', ['styles']).on('change', reportChange);
});

 gulp.task('clean', function () {
     return(del('dist/**/*'));
 });

 gulp.task('compile', ['clean'], function () {
     return gulp
        .src('src/client/app/**/*.ts')
        .pipe(typeScript(tscConfig.compilerOptions))
        .pipe(gulp.dest('dist/app'));
 })

gulp.task('dev', ['tsc', 'server', 'watch']);
gulp.task('build', ['compile']);

gulp.task('default', ['dev']);
