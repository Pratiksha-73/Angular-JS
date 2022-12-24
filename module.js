var app = angular.module("myApp",['ngRoute']);

app.config(["$routeProvider",function($routeProvider){

	$routeProvider
	when ("/teacher",{
		templateUrl: 'views/teacher.html',
		 controller: 'teacher_ctr'
	}).
	when("/student",{
		templateUrl: 'views/student.html',
		 controller: 'student_ctr'
	}).
	when("/courses",{
		templateUrl: 'views/courses.html'

	}).otherwise({redirectTo: 'index.html'});

}]);
app.controller("teacher_ctr",function($scope){
   $scope.teachers=[
      {name:"Nupur",age:35,qualification:'MSC'},
      {name:"Nupur",age:35,qualification:'MSC'},
      {name:"Nupur",age:35,qualification:'MSC'},
      {name:"Nupur",age:35,qualification:'MSC'},

   ];

});
app.controller("student_ctr",function($scope){

   $scope.students =["ABS","XVY","ADH","THU","TYHJ"];

});