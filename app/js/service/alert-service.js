angular.module('curso').service('AlertService', AlertService);

AlertService.$inject = ['$growl'];

function AlertService($growl){

    this.showAlert = showAlert;

    function showAlert(titulo, mensagem){
        $growl.box(titulo, mensagem,{
            class: 'warning',
            timeout: 3000
        }).open();
    }
}
