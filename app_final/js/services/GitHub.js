angular.module('myApp')

.factory( 'GitHub', 
          function($http)
          {
            return {
              user_data: null,
              user_name: null,
              repos_url: null,
              repos: null,
              get_user_data: function(user_name)
              {
                return $http.get('https://api.github.com/users/' + user_name);
              },

              get_repos: function()
              {
                  return $http.get( this.repos_url );
              }

            }
          }
);