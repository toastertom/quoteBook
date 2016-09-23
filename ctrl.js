angular.module('quoteBook').controller('mainCtrl', function ($scope , dataServices) {

  $scope.quotes = dataServices.getData();

  $scope.deleteMe = function(textToRemove){
  dataServices.removeData(textToRemove);
}

$scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if (dataServices.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
};


})
