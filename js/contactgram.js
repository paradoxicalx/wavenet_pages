$('#btn-sendmessage').on('click', function() {
	let text = '*Pesan dari www.wavenet.id*\n\n  Nama : '+$('#name').val()+'\n  Phone : '+$('#phone').val()+'\n  Email : '+$('#email').val()+'\n  message : '+$('#message').val()
	$.post( "https://api.telegram.org/bot320553272:AAHpqRBJpP0DiW6SVxdIDP9z9DWJiwKQElU/sendMessage", {
		 'chat_id': '-319721770',
		 'parse_mode': 'markdown',
		 'text': text,
	 } );
})
