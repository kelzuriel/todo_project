var app = angular.module("tasksApp",["ngRoute"] );


app.config(function($routeProvider){

	$routeProvider

	.when("/home",{
		templateUrl: "pages/home.html",
		controller: "mainController"

	})
	.when("/tasks",{
		templateUrl: "pages/tasks.html",
		controller: "tasksController"

	})
});

app.controller("mainController", ["$scope", function(s){

console.log("Conected");

}]);

app.controller("tasksController", ["$scope", function(s){

s.tasks = [
{"title": "Build le app!", "done": false}

];

s.addTask = function(){
	s.tasks.push({"title": s.newTask, "done":false});
	s.newTask = "";
}
s.erase = function(){
	s.tasks = s.tasks.filter(function(tsk){
     return !tsk.done;
	});
}

}]);