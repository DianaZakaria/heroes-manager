app.controller('MainController', ['$scope', 'heroesService', 'favoriteFactory', function($scope, heroesService, favoriteFactory) {

    $scope.sortBy = function(propertyName, reverse) {
        $scope.reverse = reverse;
        $scope.propertyName = propertyName;
    };

    $scope.init = function init() {
        // initial sort of heroes list
        $scope.heroes = [];
        $scope.propertyName = '';
        $scope.reverse = false;
        $scope.errorMessage = "";
        $scope.showError = false;
    };

    $scope.loadHeroes = function load() {
        // if succeed
        heroesService.getData().then(function(data){

            $scope.init();

            $scope.heroes = data;

        }).catch(function(error){ // if fails
            $scope.showError = true;
            $scope.errorMessage = "Oops! Something went wrong. Try again later.";
            console.log('error: ' + error);
        });
    };

    $scope.showFavorites = function() {
        $scope.heroes = favoriteFactory.getFavorites();
    };

    $scope.loadHeroes();

}]);
