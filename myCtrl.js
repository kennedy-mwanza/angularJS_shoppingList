app.controller("myCtrl", function($scope){
    $scope.items = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function(){
        $scope.errortext = "";
        if(!$scope.addMe){return;}
        if($scope.items.indexOf($scope.addMe) == -1){
            $scope.items.push($scope.addMe);
        }
        else{
            $scope.errortext = "The item is already on your shopping list";
        }
    }
    $scope.removeItem = function(x){
        $scope.errortext = "";
        $scope.items.splice(x, 1);
    }
});