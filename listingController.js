angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.newItem = '';
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

     var defineNewListing = function (firstString, secondString) {
       var newListing =
                     {
                         "code": firstString,
                         "name": secondString
                     };
       return newListing;
     }

    $scope.addListing = function() {

      var item = defineNewListing($scope.newCode, $scope.newName)

      $scope.listings.push(item);
    };
    $scope.deleteListing = function(index) {
      console.dir($scope.listings[index]);
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {

    };
  }
]);
