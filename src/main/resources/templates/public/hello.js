/**
 * Created by lguser on 7/21/2016.
 */
function Hello($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting')
        .success(function(data) {
        $scope.greeting = data;
    });
}