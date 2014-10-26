angular.module('app').controller('mvNavBarLoginCtrl', function ($scope, $http, $location, mvIdentity, mvNotifier, mvAuth) {
  $scope.identity = mvIdentity;
  $scope.signin = function (username, password) {
    mvAuth.authenticateUser(username, password).then(function (success) {
      if(success) {
        mvNotifier.notify("You have successfully signed in!"); 
      }
      else{
        mvNotifier.notify('Please check the username/password!');  
      }
    }); 
  };
});
