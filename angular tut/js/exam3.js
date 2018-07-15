var app3 = angular.module('app3', []);

app3.controller('gList', function($scope){
    $scope.groceries = [
        {item: 'Tomatoes', purchased: false},
        {item: 'Potatoes', purchased: false},
        {item: 'Bread', purchased: true},
        {item: 'Humus', purchased: true},
    ]
});