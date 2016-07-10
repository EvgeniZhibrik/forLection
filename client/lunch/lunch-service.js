(function(){
    function lunchService ($http){

        function getTotalPrice (lunch) {
            return lunch.food.reduce(function (prev, cur){
                return prev + cur.price;
            }, 0);
        }

        function getMenus () {
            return $http.get('/menu');
        }

        function getUsers () {
            return $http.get('/users');
        }

        function makeOrder (lunch, user){
            return $http.post('/order', {
                user: user,
                lunch: lunch
            });
        }

        this.getTotalPrice = getTotalPrice;
        this.getMenus = getMenus;
        this.getUsers = getUsers;
        this.makeOrder = makeOrder;
    }

    angular.module('lunch').service('lunchService', ['$http', lunchService]);
})();
