var app = angular.module("myApp",['ngRoute']);
app.config(["$routeProvider",function($routeProvider){

	$routeProvider
	when ("/teacher",{
		templateUrl: 'views/teacher.html',
	}).
	when("/student",{
		templateUrl: 'views/student.html',
	}).
	when("/courses",{
		templateUrl: 'views/courses.html',
	}).otherwise({redirectTo: 'index.html'});

}]);
app.controller("teacher",function ($scope){
	$scope.teachers=[
	{name: "Pratiksha", age:30, qualification:"MCA"},
	{name: "Pranali", age:28, qualification:"MSc"},
	{name: "Spoorthi", age:30, qualification:"M.Tech"},
	{name: "Anandita", age:32, qualification:"B.Tech"},
	];

});
app.controller("student",function($scope){
	$scope.students=["Shivam","Renuka","Tarang","Snehal"];
});
