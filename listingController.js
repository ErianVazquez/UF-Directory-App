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
       var string = '{"code": "'+firstString+'","name": "'+firstString+'"}';
       return string;
     }

    $scope.addListing = function() {

      var input = defineNewListing($scope.newCode, $scope.newName);

      console.log(input);

      $scope.listings.push(input);

      // listings.entries.push
      //
      // $scope.listings.push($scope.newCode);
      // $scope.newItem = '';
    };
    $scope.deleteListing = function(index) {
      console.dir($scope.listings[index]);
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {

    };
  }
]);
