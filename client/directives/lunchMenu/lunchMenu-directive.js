angular.module('directives').directive('lunchMenu', function(){
     return {
        restrict: 'E',
        scope: {
            lunch: '=',
            onClick: '&',
            totalPrice: '='
        },
        templateUrl: 'directives/lunchMenu/lunchMenuTemplate.html'
      };
});