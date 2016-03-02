function addCoffee(){
	$.ajax({'url': 'db.php', success: function(result){
	   $('.numXic').text(result);
	   console.log(result);
	}});
}

addCoffee();

$('.addCoffee').find('a').on('click', function(){
	$.post("db.php", {'newNum': 'ok'}, function(result){
		$('.numXic').html(result);
		console.log(result);
	});
	// addCoffee();
});