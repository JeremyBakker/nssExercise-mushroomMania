app.controller("LoadCtrl", function($scope, $http){
	$http({
	  method: 'GET',
	  url: '../data.json'
	}).then(function successCallback(response) {
	    let mushroomArray = [];
	    for (var i in response.data.mushrooms) {
	    	let newObject = {};
	    	newObject.name = Object.keys(response.data.mushrooms[i]);
	    	newObject.description = response.data.mushrooms[i][newObject.name].description;
	    	newObject.edible = response.data.mushrooms[i][newObject.name].edible;
	    	mushroomArray.push(newObject);
	    }
	    $scope.mushrooms = mushroomArray;
      });
	  }, function errorCallback(response) {
	    console.error("error");
	  });



