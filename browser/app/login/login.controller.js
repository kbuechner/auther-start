'use strict';

app.controller('loginControl', function ($scope, User) {
  $scope.submitLogin = function () {
  	console.log($scope.submitPwd)
  	console.log($scope.submitEmail)
  	return (User.submitLogin({
  		email: $scope.submitEmail,
  		password:  $scope.submitPwd
  	})
    .then(function(){
    	console.log("HOLY CRAP LOGGED IN")
    })
  )};
});
