angular.module('curso').filter('maiusculo', maiusculo);

function maiusculo(){
    return function (input){
        if(input && typeof  input === 'string'){
            return input.toUpperCase();
        }
    }
}