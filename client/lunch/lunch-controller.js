(function(){
    function lunchController($scope, $q, lunchService){

        function init () {
            $scope.menu = [];
            $scope.users = [];
            $scope.chosenMenu = {};
            $scope.chosenUser = '';
            var promises = {
                menu: lunchService.getMenus(),
                users: lunchService.getUsers()
            };

            $q.all(promises).then(function(data){
                $scope.menu = data.menu.data;
                $scope.users = data.users.data;
            }).catch(function(data){
                console.log('ups');
            });
        }
        
        init();
        
        $scope.chooseMenu = function (lunch){
            $scope.chosenMenu = {
                name: lunch.name,
                price: $scope.getTotalPrice(lunch)
            };
        };
        
        $scope.getTotalPrice = lunchService.getTotalPrice;
        
        $scope.chooseUser = function(userName){
            $scope.chosenUser = userName;
        }
        
        $scope.makeOrder = function(lunch, user){
            lunchService.makeOrder(lunch, user).then(function(response){
                alert('Hello ' + response.data.order.user + '! You ordered ' + response.data.order.lunch.name + '. Your order numder: ' + response.data.number);
                init();
            }).catch(function(resp){
                console.log(resp.data);
            });
        }
    }



    angular.module('lunch').controller('lunchController', ['$scope', '$q', 'lunchService', lunchController]);
})();