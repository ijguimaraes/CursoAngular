angular.module('curso', [
    'ngMessages',
    'ui.growl',
    'ui.grid',
    'ngMaterial',
    'ui.router'
]).config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider){

    var home = {
        url: '/',
        templateUrl: 'app/views/home.html'
    };

    var produto = {
        url: '/produto',
        templateUrl: 'app/views/produto/cadastro-produto.html'
    };

    var produtoPesquisa = {
        url: '/pesquisa',
        templateUrl: 'app/views/produto/pesquisa-produto.html'
    };

    $stateProvider
        .state('home', home)
        .state('produto', produto)
        .state('produto.pesquisa', produtoPesquisa);

    $urlRouterProvider.otherwise('/');
}