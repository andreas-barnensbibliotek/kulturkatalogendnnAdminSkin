# Kulturkatalogen Admin Dnnskin projekt

1. npm init

2. npm install --save-dev gulp gulp-sass gulp-autoprefixer gulp-rename gulp-clean-css gulp-sourcemaps webpack-stream

3. npm install jquery --save

glöm inte att lägga till .gitignore (med texten:node_modules/) i "node_modules" foldern så att inte alla dependencyfilerna kommer med i gitt repot.


Filstruktur gulp js concat och webpack

Kör man gulp default
cmd: gulp
då körs endast webpack 
kk_Admin_Acklay/_dev/devjs/ och /**/*.js
Bundlefilen landar i 
kk_Admin_Acklay/_dev/dev_jsbundle/kk_aj_js/kk_aj_MainApp.js
glulptask watch 


cmd gulp jsconcatfiles
slår ihop alla javascript i mappen dev_jsbundle och levererar en fil kk_aj_bundle.js den landar i
public/js/kk_aj_bundle.js

detta är produktionsfilen för använding i projektet.