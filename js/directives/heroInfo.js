app.directive('heroInfo', function() {
    return {
        restrict: 'E',
        scope: {
            hero: '='
        },
        templateUrl: 'js/directives/heroInfo.html',
        controller: function($scope, favoriteFactory) {
            $scope.addToFavorites = function(hero) {
                favoriteFactory.addToFavorites(hero);
            };

            $scope.deleteFromFavorite = function(hero) {
                favoriteFactory.deleteFromFavorite(hero);
            };

            $scope.isFavorite = function(hero) {
                return favoriteFactory.isFavorite(hero);
            };

            $scope.getImagePath = function(img) {
                return "images/"+img;
            };
        }
    };
});