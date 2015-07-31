<script>
var app=angular.modular('empApp',[]);
app.controller('empCtrl',function($scope,$http)
{
	$scope.insertValues=function(){
		$http.post("insert.php").success(function()data{
			$scope.empDetails=data;
			
		})
	}
})
app.controller('myCtrl',function($scope,$http)
{
	$scope.insertValues=function(){
		$http.post("insertDB.jsp").success(function()data{
			$scope.insertVal=data;
			
		})
	}
})
</script>