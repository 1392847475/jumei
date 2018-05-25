var gulp = require("gulp");
var sass = require("gulp-sass");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var cleanCss = require("gulp-clean-css")





gulp.task("copy-index",function(){
	gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})

gulp.task("copy-sass",function(){
	gulp.src("sass/*.scss").pipe(sass()).pipe(cleanCss()).pipe(gulp.dest("dist/css"));
})

gulp.task("copy-image",function(){
	gulp.src("img/**").pipe(gulp.dest("dist/image"));
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
	});
	
})
gulp.task("watch",function(){
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("sass/*.scss",["copy-sass"]);
	gulp.watch("img/**",["copy-image"]);	
})
gulp.task("default",["server","watch"]);

gulp.task("concat",function(){
	gulp.src(["js/a.js","js/b.js"]).pipe(concat("common.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("common.min.js"))
	.pipe(gulp.dest("dist/js"));
})



