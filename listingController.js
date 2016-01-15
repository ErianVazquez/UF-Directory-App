angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.newItem = '';
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

     var defineNewListing = function (firstString, secondString, thirdString, fourthString, fifthString) {
      var newListing = {

                      };
      newListing.code = firstString;
      newListing.name = secondString;
      var corrdinates;
      if(thirdString != '' || fourthString != ''){
        corrdinates = {
                        "latitude": thirdString,
                        "longitude": fourthString
                        };
      }
      newListing.coordinates = corrdinates
      newListing.address = fifthString

       return newListing;
     };

    $scope.addListing = function() {

      console.log($scope.newCode)
      console.log($scope.newName)
      if($scope.newCode && $scope.newName){
        console.log('1')
        var item = defineNewListing($scope.newCode, $scope.newName, $scope.newLatitude, $scope.newLongitude, $scope.newAddress);
        $scope.listings.push(item);
      } else {
        console.log('2')
        alert("Some required fields aren't entered");
      }
    };

    $scope.deleteListing = function(listing) {
      var index = $scope.listings.indexOf(listing);
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(listing) {
      var index = $scope.listings.indexOf(listing);
      $scope.displayCode = 'Code: ' + $scope.listings[index].code;
      $scope.displayName = 'Name: ' + $scope.listings[index].name;
      if(!$scope.listings[index].hasOwnProperty('coordinates')){
        $scope.displayLongitude = 'Longitude: ' + 'Not Avaiable';
        $scope.displayLatitude = 'Latitude: ' + 'Not Avaiable';
      } else {
        $scope.displayLongitude = 'Longitude: ' + $scope.listings[index].coordinates.longitude;
        $scope.displayLatitude = 'Latitude: ' + $scope.listings[index].coordinates.latitude;
      }
      if(!$scope.listings[index].hasOwnProperty('address')){
        $scope.displayAddress = 'Address: ' + 'Not Avaiable';
      } else {
        $scope.displayAddress = 'Address: ' + $scope.listings[index].address;
      }

    };


    $scope.showSearchResult = function() {
     // $scope.displayLongitude =  'test1';
      for(listingNum in $scope.listings) {
            if($scope.listings[listingNum].code === $scope.searchString || $scope.listings[listingNum].name === $scope.searchString){
              //var theListing = $scope.listings[j];
              $scope.showDetails($scope.listings[listingNum]);
              break;
            }

      }

      //$scope.displayLongitude = 'Longitude: ' + $scope.searchString;
    };
  }
]);
