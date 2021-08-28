"use strict";

const { src, dest, watch, series, parallel } = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
const rename = require('gulp-rename');

const sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

const cp = require("child_process");

const browserSync = require('browser-sync').create();

// File paths

const files = {
    scssPath: '_sass/**/*.scss',
    cssPath: 'assets/',
    jsPath: 'assets/js/main.js',
    imgPath: 'assets/img/**/*',
    fontPath: 'assets/fonts/**/*',
}


// Sass task: compiles the style.scss file into style.css
function scssTask(){
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer(),cssnano() ]))
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest(files.cssPath)) // put final CSS in dist folder
        .pipe(browserSync.reload({stream:true}))
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask(){
    return src([
        files.jsPath
        //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
    ])
        .pipe(uglify())
        .pipe(dest('_site/assets/js/'))
        .pipe(browserSync.reload({stream:true}))
}

//img task
function imgTask() {
    return src(files.imgPath)
        .pipe(newer("_site/assets/img/"))
        .pipe(imagemin())
        .pipe(dest("_site/assets/img/"))
        .pipe(browserSync.reload({stream:true}))
}
//img task
function fontTask() {
    return src(files.fontPath)
        .pipe(newer("_site/assets/fonts/"))
        .pipe(dest("_site/assets/img/"))
        .pipe(browserSync.reload({stream:true}))
}

// Jekyll
function jekyll() {
    return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}


// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){

    watch([files.scssPath], parallel(scssTask, browserSyncReload));
    watch([files.jsPath], parallel(jsTask, browserSyncReload));
    watch(['_includes/**', '_layouts/**/*', 'pages/**'], series(jekyll, browserSyncReload));
    watch(files.imgPath, imgTask);

}

//browsersynce function
function browserSyncServe(done) {
    browserSync.init({
        server: {
            baseDir: "_site"
        }
    });
    done();
}

function browserSyncReload(done) {
    browserSync.reload();
    done();
}

// exports.build = build;
// exports.default = series(clean, build);

exports.default = series(
    parallel(jekyll, scssTask, jsTask, imgTask, fontTask),
    browserSyncServe,
    watchTask
);

// exports.default = series(parallel(scssTask, jsTask, browserSyncServe), watchTask);
