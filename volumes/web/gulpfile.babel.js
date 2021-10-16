import {src, dest, watch, series, parallel} from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import del from 'del';
import webpack from 'webpack-stream';
import imagemin from 'gulp-imagemin';
import named from 'vinyl-named';

const PRODUCTION = yargs.argv.prod;

export const clean = () => del(['index/static/assets']);

export const styles = () => {
    return src('src/scss/bundle.scss')
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
        .pipe(gulpif(PRODUCTION, cleanCss({compatibility: 'ie8'})))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(dest('index/static/assets/css'))
}

export const images = () => {
    return src('src/files/**/*.{jpg,jpeg,png,svg,gif}')
        .pipe(gulpif(PRODUCTION, imagemin()))
        .pipe(dest('index/static/assets/img'));
}

export const fonts = () => {
    return src('src/scss/components/fonts/**/*.{woff2,woff,svg,eot}')
        .pipe(dest('index/static/assets/css/fonts'));
}

export const copy = () => {
    return src(['src/**/*', '!src/{images,js,scss}', '!src/{images,js,scss}/**/*'])
        .pipe(dest('index/static/assets'));
}


export const watchForChanges = () => {
    watch('src/scss/**/*.scss', styles);
    watch('src/files/**/*.{jpg,jpeg,png,svg,gif}', images);
    watch(['src/**/*', '!src/{files,js,scss}', '!src/{files,js,scss}/**/*'], copy);
    watch('src/js/**/*.js', scripts);
}

export const scripts = () => {
    return src(['src/js/bundle.js'])
        .pipe(named())
        .pipe(webpack({
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: []
                            }
                        }
                    }
                ]
            },
            mode: PRODUCTION ? 'production' : 'development',
            devtool: !PRODUCTION ? 'inline-source-map' : false,
            output: {
                filename: '[name].js'
            },
        }))
        .pipe(dest('index/static/assets/js'));
}


export const dev = series(clean, parallel(styles, fonts, images, copy, scripts), watchForChanges);
export const build = series(clean, parallel(styles, fonts, images, copy, scripts))
export default dev;
