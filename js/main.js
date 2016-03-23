function addCoffee(){
	$.ajax({'url': 'db.php', success: function(result){
	   $('.numXic').text(result);
	}});
}

addCoffee();

$('.addCoffee').find('a').on('click', function(){
	$.post("db.php", {'newNum': 'ok'}, function(result){
		$('.numXic').html(result);
	});
	// addCoffee();
});