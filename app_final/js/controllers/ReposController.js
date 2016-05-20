'use strict';

angular.module('myApp')

.controller('ReposController', [ '$scope',
                            'GitHub',
                              function( $scope, GitHub ) 
                              {

                                console.log('ReposCtrl'); 
                                $scope.repos = GitHub.repos;
                                

                              }
                              ]);