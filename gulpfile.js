var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');

gulp.task('css', function(){
    return gulp.src('app/src/scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('app/build/css'));
});

gulp.task('images', function(){
    return gulp.src('app/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('app/build/images'))
});

gulp.task('watch', function(){
    gulp.watch('app/src/scss/**/*.scss',gulp.series('css'));
});
