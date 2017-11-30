var gulp=require("gulp"),
	sass=require("gulp-sass"),
	livereload=require("gulp-livereload");

gulp.task(["sass"],function(){
	gulp.src("sass/*.sass")
		.pipe(sass({outputstyle:compressed}))
		.pipe(gulp.dest("css"))
		.pipe(livereload());
});

gulp.task(["livereload"],function(){
	livereload.listen();
	gulp.watch("sass/*.sass",["sass"]);
})
