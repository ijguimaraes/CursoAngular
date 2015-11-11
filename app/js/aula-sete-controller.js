angular.module('curso').controller('AulaSeteController', AulaSeteController);

AulaSeteController.$inject = ['$scope', 'AlertService'];

function AulaSeteController($scope, AlertService) {

    var selectedIndex = undefined;

    $scope.pessoa = {};
    $scope.pessoas = [];

    $scope.gridAlterarItem = gridAlterarItem;
    $scope.gridExcluirItem = gridExcluirItem;
    $scope.getRowStyle = getRowStyle;
    $scope.salvar = salvar;
    $scope.limpar = limpar;

    $scope.gridOptions = {
        data:'pessoas',
        columnDefs: [
            {name: 'Nome', field: 'nome', width:150}, //, cellTemplate: 'app/templates/cell-template.html'},
            {name: 'E-mail', field: 'email', width:250, cellTemplate: 'app/templates/cell-template.html'},
            {name: 'Cor', field: 'cor', width:50, cellTemplate: 'app/templates/cell-template.html'},
            {name: '', field: 'optAlterar', cellTemplate: 'app/templates/cell-template-button.html'},
        ],
        enableRowSelection: true,
        rowTemplate: 'app/templates/row-template.html'
    };

    function getRowStyle(entidade){
        var resultStyle = {};
        if(entidade.cor){
            resultStyle.backgroundColor = entidade.cor;
        }
        return resultStyle;
    }
    function gridAlterarItem(entity, rowRenderIndex){
        selectedIndex = rowRenderIndex;
        $scope.pessoa = angular.copy(entity);
    }

    function gridExcluirItem(rowRenderIndex){
        selectedIndex = undefined;
        $scope.pessoas.splice(rowRenderIndex,1);
    }

    function salvar() {

        if(selectedIndex === undefined){


            $scope.pessoas.push(angular.copy($scope.pessoa));
        } else {
            $scope.pessoas.splice(selectedIndex, 1, angular.copy($scope.pessoa));
        }

        AlertService.showAlert('Ok', 'Registro salva com sucesso');

        $scope.limpar();
    }

    function limpar() {
        $scope.pessoa = {};
        selectedIndex = undefined;
    }


}