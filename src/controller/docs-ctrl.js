/**
 * Created by yeh on 15-2-6.
 */
var ani = ani || {};
ani.pj = ani.pj || {};
ani.pj.controller = ani.pj.controller || {};

ani.pj.controller.ContactCtrl = function($scope, $rootScope, $translate){
    $scope.contactMapStyle = {
        "border": "#ccc solid 1px",
        "font-size": "14px",
        "height": ($rootScope.getWindowHeight() - 300) + "px"
    }
}