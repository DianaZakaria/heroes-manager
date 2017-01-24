app.factory('heroesService', function($q) {
    this.heroes = [];

    var getData = function() {
        var deferred = $q.defer();

        heroesManager.fetch(function(error, data){
            if(error) {
                deferred.reject(error);
            } else {
                deferred.resolve(data);
            }
        });

        return deferred.promise;
    };

    return {getData: getData};
});