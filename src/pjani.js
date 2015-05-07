/**
 * Created by yeh on 15-2-6.
 */
var ani = ani || {};
ani.pj = ani.pj || {};
ani.pj.global = ani.pj.global || {};

if (window.console) {
    console.log("Anicloud Projects");
}

ani.pj.global.loadApp = function(controllerObj, serviceObj, appName){
    var curApp = angular.module(appName, [
        'ngRoute',
        'pascalprecht.translate'
    ]);
    //system services
    for(var oneSysServiceName in ani.pj.config.service) {
        curApp.config([
            oneSysServiceName,
            ani.pj.config.service[oneSysServiceName]
        ]);
    }

    //services
    for(var oneServiceName in serviceObj){
        curApp.factory(oneServiceName, serviceObj[oneServiceName]);
    }
    //controllers
    for(var oneCtrlName in controllerObj){
        curApp.controller(oneCtrlName, controllerObj[oneCtrlName]);
    }
}

ani.pj.global.loadApp(ani.pj.controller, ani.pj.service, 'pjani');




