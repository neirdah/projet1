'use strict';

var cacheActive = false;

app.config(function ($stateProvider) {
    $stateProvider
        .state('homepage', {
            cache: cacheActive,
            url:'/',
            templateurl: 'js/views/homepage/index.html',
            controller: function () {
                
            }
    })
    
});