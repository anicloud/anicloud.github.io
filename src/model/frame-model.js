/**
 * Created by yeh on 15-2-5.
 */
var ani = ani || {};
ani.pj = ani.pj || {};
ani.pj.model = ani.pj.model || {};

ani.pj.model.Frame = function(){
    var _this = this;
    _this.title = ani.pj.config.frame.title;
    _this.style = ani.pj.config.frame.style;
    _this.curLanguage = navigator.language;
    _this.languages = ani.pj.config.language.list;
    _this.menu = ani.pj.config.frame.menu;

    _this.setLanguage = function(languageCode){
        _this.language = languageCode.trim();
    }

}

ani.pj.model.Language = function(languageSet){}