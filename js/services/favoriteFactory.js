app.factory('favoriteFactory', function() {

    var favFac = {};
    var favouriteList = [];

    favFac.addToFavorites = function (hero) {
        if (favouriteList.indexOf(hero) == -1) {
            favouriteList.push(hero);
        }
    };

    favFac.getFavorites = function () {
        return favouriteList;
    };

    favFac.isFavorite = function(hero) {
        if (favouriteList.indexOf(hero) == -1) {
            return false;
        }
        return true;
    };

    favFac.deleteFromFavorite = function(hero) {
        var index = favouriteList.indexOf(hero);
        favouriteList.splice(index, 1);
    };

    return favFac;
});
