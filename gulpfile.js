var gulp = require('gulp');
var spawn = require('cross-spawn');
var browserSync = require('browser-sync');

gulp.task('jekyll-serve', function() {
 return spawn('bundle', ['exec','jekyll','serve'], { stdio: 'inherit' });
});

/*
 * Wait for jekyll-serve, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-serve'], function() {
 browserSync({
  port: 3200,
  reloadDelay: 2000,
  server: {
   baseDir: '_site'
  }
 });
});

/*
 * Watch & Reload html/md, scss, js files, reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_site/assets/css/**', '_site/**', '_site/assets/js/**']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
