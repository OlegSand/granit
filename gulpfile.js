const { watch, series,  src, dest, parallel } = require('gulp');
const sass          = require('gulp-sass');
const uglify        = require('gulp-uglify');
const pump          = require('pump');
const concat        = require('gulp-concat');
const autoprefixer  = require('gulp-autoprefixer');
const browserSync   = require('browser-sync').create();

sass.compiler   = require('node-sass');

function serve() {
    browserSync.init({
        server: "./app"
    });

    watch("app/scss/*.scss", sassFoo)
    watch("app/*.html").on('change', browserSync.reload);
}


function sassFoo(cb) {
    return src('dist/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7' ], {cascade: true}))
    .pipe(concat('style.css'))
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream());
    cb();
}

// function compress(cb) {
//     pump([        
//         src('dist/js/*.js')
//             .pipe(concat('all.js'))
//             .pipe(uglify()),
//             dest('app/js/test.js')
//     ],
//         cb
//     );
// };
function compress() {
    src('dist/js/*.js')
    .pipe(uglify())
    .pipe(concat('all.js'))
        dest('app/js')
};

// function watch() {
//     watch('dist/sass/**/*.scss', parallel('sass'));
// 	// watch('dist/js/*.js', parallel('compress');
// }

function watcher() {
    watch('dist/scss/**/*.scss', series(sassFoo));
}



exports.sassFoo = sassFoo;
exports.compress = compress;
exports.serve = serve;
exports.watcher = watcher;
// exports.default = function () {
//     watch('dist/sass/**/*.scss', series(sassFoo));
//     // watch('dist/js/*.js', compress);
// };
exports.default = parallel(watcher, serve);