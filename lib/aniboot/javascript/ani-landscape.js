/**
 * Created by yeh on 14-10-18.
 */
var ani = {};
ani.boot = {};
ani.boot.landscape = {};

ani.boot.landscape.Menu = function (menuIdStr, propertyName, openPx, closePx) {
    var _this = this;
    _this.menuContent = $("#" + menuIdStr);
    var getValue = function(){
        return _this.menuContent.css(propertyName);
    }
    _this.open = function () {
        _this.menuContent.css(propertyName, openPx + 'px');
    }
    _this.close = function () {
        _this.menuContent.css(propertyName, closePx + 'px');
    }
    _this.switch = function () {
//        if (getValue() == (openPx + 'px')) {
//            _this.close();
//        } else if (getValue() == (closePx + 'px')) {
//            _this.open();
//        }
        _this.menuContent.toggleClass('active');
    }
}

ani.boot.landscape.Menu.registerButton = function (curMenu, buttonIdStr) {
    $('[data-toggle=sidebar]').click(function () {
        curMenu.switch()
    });
}