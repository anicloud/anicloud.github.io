/**
 * Created by yeh on 15-2-6.
 */
var ani = ani || {};
ani.pj = ani.pj || {};
ani.pj.controller = ani.pj.controller || {};

ani.pj.controller.FrameCtrl = function($scope, $rootScope, $translate){
    $rootScope.frame = new ani.pj.model.Frame();
    $rootScope.getWindowHeight = function(){
        return $(window).height();
    }
    $scope.curLabel = "home";
    $scope.switchContentLabel = function(label){
        $scope.curLabel = label.toLowerCase();
    }
    $scope.getLabelState = function(label){
        return $scope.curLabel == label.toLowerCase() ? 'active' : '';
    }
}