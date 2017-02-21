var app = angular.module('labTutorApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/', {
		templateUrl : 'Lab Tutor.html',
		controller	: 'mainController'
		
	})
	
	.when('/student', {
		templateUrl : 'Lab Tutor.html',
		controller	: 'studentController'
		
	})
	
	.when('/docent',{
		templateUrl : 'docent.html',
		controller : 'docentController'
		
	});
	
});
app.controller('MainController', function($scope) {
  $scope.room = {
    numberOfQuestions: 7
  };

  var defaultExerciseStatus = function() {
    var defaultExerciseStatusArr = [];
    for (var i = 0; i < $scope.room.numberOfQuestions; i++) { defaultExerciseStatusArr.push({ completed: false }); }
    return defaultExerciseStatusArr;
  };

  $scope.room.currentUser = {
    name: '',
    exercisesStatus: defaultExerciseStatus()
  };

 
  $scope.room.otherUsers = [
    {
      name: ' Vincent Verheggen',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Vincent Verheggen',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Koen Schauwaert',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Wouter Peetermans',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Ski De Keersmaeker',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: ' Ibe Minnebach',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: ' JP Morgan',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Nick Cuypers',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: ' Maarten Wachters',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Robbe Goethals',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Vladim Apati',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: ' Kevin Hauman',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: ' Jordy Everaert',
      exercisesStatus: defaultExerciseStatus()
    }
  ];

  $scope.allExercisesCompleted = function (user) {
    var exercisesCompleted = true;
    user.exercisesStatus.forEach(function (status) {
      if (!status.completed) {
        exercisesCompleted = false;
      }
    });
    return exercisesCompleted;
  };

  $scope.toggleExerciseStatus = function (user, exercise) {
    user.exercisesStatus[exercise].completed = !user.exercisesStatus[exercise].completed;
  };
});
