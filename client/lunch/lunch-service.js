(function(){
    function lunchService ($http){

        this.getTotalPrice = function (lunch) {
            return lunch.food.reduce(function (prev, cur){
                return prev + cur.price;
            }, 0);
        };
        
        this.getMenus = function () {
            return $http.get('/menu');
        };
        
        this.getUsers =  function getUsers () {
            return $http.get('/users');
        };
        
        this.makeOrder = function makeOrder (lunch, user){
            return $http.post('/order', {
                user: user,
                lunch: lunch
            });
        };
    }

    angular.module('lunch').service('lunchService', ['$http', lunchService]);
})();
