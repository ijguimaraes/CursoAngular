angular.module('curso').controller('AulaSeisController', AulaSeisController);

AulaSeisController.$inject = ['$scope', 'AlertService'];

function AulaSeisController($scope, AlertService) {

    $scope.pessoa = {};
    $scope.pessoas = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;

    var cellTemplate =
        '';

    $scope.gridOptions = {
        data:'pessoas',
        columnDefs: [
            {name: 'Pessoa', field: 'nome', width:150},
            {name: 'E-mail', field: 'email', width:250},
        ],
        enableRowSelection: true
    };


    function salvar() {

        $scope.pessoas.push($scope.pessoa);

        AlertService.showAlert('Ok', 'Registro salva com sucesso');

        $scope.limpar();

    }

    function limpar() {
        $scope.pessoa = {};
    }


}