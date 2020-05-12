const gulp = require("gulp");
const sass = require("gulp-sass");
const replace = require("gulp-replace");

gulp.task("styles", () => {
  return gulp
    .src("assets/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(replace("/*!", "/*"))
    .pipe(gulp.dest("assets/css/"));
});

gulp.task("default", gulp.series(["styles"]));

gulp.task("watch", () => {
  gulp.watch("assets/sass/**/*.scss", (done) => {
    gulp.series(["styles"])(done);
  });
});