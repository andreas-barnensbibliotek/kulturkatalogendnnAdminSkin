# Kulturkatalogen Admin Dnnskin projekt

1. npm init

2. npm install --save-dev gulp gulp-sass gulp-autoprefixer gulp-rename gulp-clean-css gulp-sourcemaps webpack-stream

3. npm install jquery --save

glöm inte att lägga till .gitignore (med texten:node_modules/) i "node_modules" foldern så att inte alla dependencyfilerna kommer med i gitt repot.


Filstruktur gulp js concat och webpack

Kör man gulp default
cmd: gulp
då körs först webpack js
1.	kk_Admin_Acklay/_dev/devjs/ och /**/*.js
	Bundlefilen landar i 
	kk_Admin_Acklay/_dev/dev_jsbundle/kk_aj_js/kk_aj_MainApp.js

2.	körs gulp jsconcatfiles som slår ihop alla javascript i mappen 
	dev_jsbundle och levererar en fil kk_aj_bundle.js den landar i
	public/js/kk_aj_bundle.js


#Detta är produktionsfilen för använding i projektet.

// dependencyfilerna dessa används för att köra hela kulturkatalogen ADMIN

Dnn Modules repos för Kulturkatalogen Admin

https://github.com/andreas-barnensbibliotek/Dnn_module_kk_aj_startView.git

https://github.com/andreas-barnensbibliotek/Dnn_module_kk_ajdiarieView.git

https://github.com/andreas-barnensbibliotek/Dnn_module_kk_aj_ansokningarView.git

https://github.com/andreas-barnensbibliotek/Dnn_module_kk_aj_menuAvatar.git

https://github.com/andreas-barnensbibliotek/Dnn_module_kk_aj_topnavNotify.git

https://github.com/andreas-barnensbibliotek/Dnn_Module_kk_aj_adminConfig.git