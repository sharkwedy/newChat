(function() {

	$('#liveChatLeft header').on('click', function() {

		$('#chatLeft').slideToggle(300, 'swing');

	});

	$('#liveChatRight header').on('click', function() {

		$('#chatRight').slideToggle(300, 'swing');

	});

	$('#closeChatHistory1').on('click', function(e) {

		e.preventDefault();
		$('#liveChatLeft').fadeOut(300);

	});

	$('#closeChatHistory2').on('click', function(e) {

		e.preventDefault();
		$('#liveChatRight').fadeOut(300);

	});

	var data = new Date();

	var dataHora = (data.toLocaleString());

	$('#submitLeft').on('click', function() {

		var data = new Date();

		var dataHora = (data.toLocaleString());

		var messege = $('#messegeLeft').val();

		if(messege != null && messege != "") {

			$('#chatHistory1').append('<div class="clearfix chatMessage messageleft"><h5>Chat User 2</h5><p>'
				+messege+'</p><span class="chatTime">'+dataHora+'</span></div>');

			$('#chatHistory2').append('<div class="clearfix chatMessage messageRight"><h5>Chat User 2</h5><p>'
				+messege+'</p><span class="chatTime">'+dataHora+'</span></div>');
		}
		$('#messegeLeft').val('');

		var documentHeight = $(document).height();

		$('.chatHistory').animate({ scrollTop: documentHeight }, 50);

	});

	$('#submitRight').on('click', function() {

		var data = new Date();

		var dataHora = (data.toLocaleString());
		
		var messege = $('#messegeRight').val();

		if(messege != null && messege != "") {

			$('#chatHistory2').append('<div class="clearfix chatMessage messageleft"><h5>Chat User 1</h5><p>'
				+messege+'</p><span class="chatTime">'+dataHora+'</span></div>');

			$('#chatHistory1').append('<div class="clearfix chatMessage messageRight"><h5>Chat User 1</h5><p>'
				+messege+'</p><span class="chatTime">'+dataHora+'</span></div>');
		}

		$('#messegeRight').val('');

		var documentHeight = $(document).height();

		$('.chatHistory').animate({ scrollTop: documentHeight }, 50);

	});

}) ();

		
