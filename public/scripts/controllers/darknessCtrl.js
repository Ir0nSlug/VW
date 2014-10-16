angular.module('vagrantApp')
.controller('darknessCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){
	

	$scope.wordsInTheDark = '';
	
	//The stranger asks his question
	$scope.ask= function()
	{
		//Get the question
		var question = $scope.StrangerInput;

		$http.post('/api/ask', question)
      .success(function (data, status, headers, config) {
      	//Update the response
        $scope.wordsInTheDark = data.answer;
      })
      .error(function (data, status, headers, config) {
      	//TO DO Error handling
      });
		$scope.strangerInput = '';
	}

	//The stranger says his valor to the eyese
	$scope.sayValor = function(strangerName)
	{
		//Get the valor
		var valor = $scope.strangerInput;

    console.log("send : " + strangerName + " " + valor);

		//Ask for valor checking
		$http.post('http://localhost:8080/known/checkValor', {strangerName: strangerName, valor: valor})
      .success(function (data, status, headers, config) {
      	//On success, valor complies to the stranger name 
      	//OR we have just met a new stranger

      	//Next action is ask
        $scope.strangerAction = $scope.ask;
        //We shall remind the stranger
        $window.sessionStorage.token = data.token;

        $scope.wordsInTheDark = data.answer;
      })
      .error(function (data, status, headers, config) {
      	//THE STRANGER IS A LYIER !
        $scope.wordsInTheDark = data.answer;
      });
		$scope.strangerInput = '';
	};

	//The stranger says his name fo acknowledgment
	$scope.sayName = function (){
		//Get the stranger name
		var strangerName = $scope.strangerInput;
    console.log("send : " + strangerName);
		//Ask for the name checking
		$http.post('/known/checkStranger', {strangerName: strangerName})
      .success(function (data, status, headers, config) {
        //Display the eyes answer
        $scope.wordsInTheDark = data.answer;
        //Save the temp token
        $window.sessionStorage.token = data.tempToken;
        //Set next action to say Valor
        $scope.strangerAction = $scope.sayValor;
      })
      .error(function (data, status, headers, config) {
        //TO DO error handling
      });
		$scope.strangerInput = '';
	};

	$scope.strangerAction = $scope.sayName;
}]);