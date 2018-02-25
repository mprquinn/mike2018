var gulp = require("gulp");
var gutil = require("gulp-util");
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("default", function() {
  gulp.watch("./src/scss/**", ["scss"]);
  gulp.watch("./src/js/**", ["js"]);
});

// CSS
gulp.task("scss", function() {
  return gulp
    .src("./src/scss/**/*")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        indentedSyntax: true,
        errLogToConsole: true,
        outputStyle: "compressed"
      })
    )
    .pipe(
      sourcemaps.write(".", {
        sourceRoot: "./src/scss"
      })
    )
    .pipe(gulp.dest("./dist/css/"));
});

// JS
gulp.task("js", function() {
  gulp
    .src("./src/js/**/*.js")
    .pipe(concat("site.js"))
    .pipe(
      babel({
        presets: ["es2015"],
        plugins: ['transform-react-jsx']
      })
    )
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(
      sourcemaps.write(".", {
        sourceRoute: "./src/js"
      })
    )
    .pipe(gulp.dest("./dist/js"));
});

// Images
gulp.task("imagemin", function() {
  gulp
    .src("./src/images/**")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
});
