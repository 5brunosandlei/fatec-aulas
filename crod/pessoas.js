/*
DECLARAÇAO DO MODULO
* PASSO 1
*/

angular.module('pessoas',[])

/*
CRIAÇÃO DAS ROTAS
PASSO 3
*/

.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
    templateUrl: 'listar.html'
    })

    .when('/pessoa/adicionar',{
    templateUrl: 'adicionar.html',
    controller: 'CtrlAdicionar'              
    })
        
})

    

/*
CRIAR O CONTROLLER
* PASSO 2
*/

.controller('CtrlPessoas', function($scope){
    
    $scope.pessoas = [
        {nome:"Mikaell",cidade:"Goiania"},
        {nome:"Samuel",cidade:"Porto Velho"},
        {nome:"João",cidade:"Natal"},
        {nome:"Maria",cidade:"Fortaleza"},
        ];
})


.controller('CtrlAdicionar',function($scope){
$scope.add = function(){
/*    $scope.pessoas.push({
        
        nome: $scope.pessoa.nome,
        cidade: $scope.pessoa.cidade
    
    });
*/
        $scope.pessoas.push($scope.pessoa);
    
        $scope.pessoa = "",

        $scope.result = "Adicionado com sucesso"
};

})