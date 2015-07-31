
/*var myApp=angular.module('myApp',[]);
myApp.controller('myCtrl',function($scope){
	$scope.firstName='Swetha';
	$scope.lastName='Deshmukh';
	$scope.fruits=['apple','Mango','Bannana','Peach'];


	$scope.employee={empNo:234,firstName:'swetha',lastName:'deshmukh',destination:'Developer',salary:5000};
	$scope.bonus=10*($scope.employee.salary/100);
	$scope.annual=$scope.employee.salary*12;
	$scope.gross=$scope.employee.salary + (10*$scope.employee.salary/100);
	$scope.tax= $scope.gross * 8/100;
	$scope.net=$scope.gross-$scope.tax;

});


var myempApp=angular.module('myEmpApp',[]);
myempApp.controller('myEmpCtrl',function($scope,$http){
	alert("IN");
	$http.get('jsonFile.json').success(function(response){
		alert("Hello");
		$scope.empInfo=response.pplInfo;
	}).error(function(response)
	{
		alert("ERROR");
	});
});

var myrouteApp=angular.module('myRouteApp',['ngRoute']);

myrouteApp.config('$routerProvider',function($routeProvider){
		$routeProvider.when('/',{
			templateURL:'';
			controller:'';
		})
		.when('/',{
			templateURL:'';
			controller:'';
		})
	});

myrouteApp.controller('myRouteCtrl',function($scope){
	$scope.message="Hello In Controller";	

});
*/

 var mainApp = angular.module("mainApp",['ngRoute']);
      
      mainApp.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/addemployee', {
                  templateUrl: 'addemployee.html',
                  controller: 'AddemployeeController'
               }).
               when('/viewemployees', {
                  templateUrl: 'viewemployees.htm',
                  controller: 'ViewemployeesController'
               }).
               when('/editemployees', {
                  templateUrl: 'editemployees.htm',
                  controller: 'editemployeesController'
               }).
               when('/deleteemployees', {
                  templateUrl: 'deleteemployees.htm',
                  controller: 'deleteemployeesController'
               }).
               when('/allemployees', {
                  templateUrl: 'allemployees.htm',
                  controller: 'allemployeesController'
               }).
               otherwise({
                  redirectTo: '/allemployees'
               });
         }]);

         mainApp.controller('AddemployeeController', function($scope) {
            $scope.message = "This page will be used to display add employee form";
         });

         mainApp.controller('ViewemployeesController', function($scope) {
            $scope.message = "This page will be used to view a specific employee";
         });

          mainApp.controller('editemployeesController', function($scope) {
            $scope.message = "This page will be used to edit employees";
         });

           mainApp.controller('deleteemployeesController', function($scope) {
            $scope.message = "This page will be used to delete employees";
         });

            mainApp.controller('allemployeesController', function($scope) {
            $scope.message = "This page will be used to display all the employees";
         });


