(function () {
    var d = document;
    var config = {
        COCOS2D_DEBUG:2, //0 to turn debug off, 1 for basic debug, and 2 for full debug
        box2d:false,
		chipmunk:false,
		loadExtension:false,
        showFPS:true,
        frameRate:60,
        tag:'gameCanvas', //the dom element to run cocos2d on
        engineDir:'../Cocus2d-html5/cocos2d/',
        appFiles:['resources.js','FirstGame.js', 'ShipSprite.js', 'ShotSprite.js']
    };
    window.addEventListener('DOMContentLoaded', function () {
        //first load engine file if specified
        var s = d.createElement('script');
        s.src = config.engineDir + 'platform/jsloader.js';
        d.body.appendChild(s);
        document.ccConfig = config;
        s.id = 'cocos2d-html5';
    });
})();
