angular.module('curso').controller('AulaOitoController', AulaOitoController);

AulaOitoController.$inject = ['$scope', 'AlertService'];

function AulaOitoController($scope, AlertService) {

    var selectedIndex = undefined;

    $scope.produto = {};
    $scope.produtos = [];

    $scope.gridAlterarItem = gridAlterarItem;
    $scope.gridExcluirItem = gridExcluirItem;
    $scope.salvar = salvar;
    $scope.limpar = limpar;

    $scope.gridOptions = {
        data:'produtos',
        columnDefs: [
            {name: 'Descrição', field: 'descricao', width:150}, //, cellTemplate: 'app/templates/cell-template.html'},
            {name: 'Unidade', field: 'unidade', width:250, cellTemplate: 'app/templates/cell-template.html'},
            {name: 'Fabricante', field: 'fabricante', width:50, cellTemplate: 'app/templates/cell-template.html'},
            {name: '', field: 'optAlterar', cellTemplate: 'app/templates/cell-template-button.html'},
        ],
        enableRowSelection: true
    };

    function gridAlterarItem(entity, rowRenderIndex){
        selectedIndex = rowRenderIndex;
        $scope.pessoa = angular.copy(entity);
    }

    function gridExcluirItem(rowRenderIndex){
        selectedIndex = undefined;
        $scope.produto.splice(rowRenderIndex,1);
    }

    function salvar() {

        if(selectedIndex === undefined){


            $scope.produtos.push(angular.copy($scope.produto));
        } else {
            $scope.produtos.splice(selectedIndex, 1, angular.copy($scope.produto));
        }

        AlertService.showAlert('Ok', 'Registro salva com sucesso');

        $scope.limpar();
    }

    function limpar() {
        $scope.produto = {};
        selectedIndex = undefined;
    }


}