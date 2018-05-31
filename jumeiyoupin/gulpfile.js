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
gulp.task("copy-html",function(){
	gulp.src("html/*.html").pipe(gulp.dest("dist/html")).pipe(connect.reload());
})
gulp.task("copy-js",function(){
	gulp.src("js/*.js").pipe(gulp.dest("dist/js")).pipe(connect.reload());
})

gulp.task("copy-sass",function(){
	gulp.src("sass/*.scss").pipe(sass()).pipe(cleanCss()).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})

gulp.task("copy-image",function(){
	gulp.src("img/**").pipe(gulp.dest("dist/image")).pipe(connect.reload());
})

gulp.task("concat",function(){
	gulp.src(["js/a.js","js/b.js"]).pipe(concat("common.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("common.min.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
	gulp.src("js/jquery.js")
	.pipe(concat("jquery.min.js"))
	.pipe(gulp.dest("dist/js"));
})


gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
	});
	
})
gulp.task("watch",function(){
	gulp.watch("js/*.js",["copy-js"])
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("html/*.html",["copy-html"]);
	gulp.watch("sass/*.scss",["copy-sass"]);
	gulp.watch("img/**",["copy-image"]);
	gulp.watch("js/*.js",["concat"])
})
gulp.task("default",["server","watch"]);





