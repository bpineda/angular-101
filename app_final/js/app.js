//console.log('Archivo cargado');


angular.module( "myApp", 
                            [ 'ngRoute' ] ).
config([
    '$routeProvider',
    function($routeProvider)
    {
      
        $routeProvider.
        when('/users', {
          templateUrl: 'templates/users.html',
          controller: 'UsersController'
        }).
        when('/repos', {
          templateUrl: 'templates/repos.html',
          controller: 'ReposController'
        }).
        otherwise({
          redirectTo: '/users'
        })
        ;
    }
  ])
;
