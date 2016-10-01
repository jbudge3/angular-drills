angular.module('filterApp').controller('mainControl', function($scope, mainService) {
  $scope.people = mainService.myData;
})
