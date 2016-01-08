angular.module('boorishpenguin', [
  'boorish.services',
  'boorish.users',
  'boorish.ask',
  'boorish.questions',
  'boorish.answers',
  'boorish.auth',
  'ngRoute'
  ])

.config(function ($routeProvider) {
  $routeProvider
    .when('/ask', {
      templateUrl: 'app/ask/ask.html',
      controller: 'askController'
    })
    .when('/questions', {
      templateUrl: 'app/questions/questions.html',
      controller: 'questionsController'
    })
    .when('/questions/:id', {
      templateUrl: 'app/answers/answers.html',
      controller: 'answersController'
    })
    .when('/users', {
      templateUrl: 'app/users/users.html',
      controller: 'UsersController'
    })
    .otherwise({
      routeTo: '/questions'
    })
});