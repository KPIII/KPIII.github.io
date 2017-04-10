$(document).ready(function(){
	$('#playerdiv').hide();
	
	$('.play-button').click(function(){
		
		var sid = $(this).attr('id').split('-').pop();
//		alert(songs[1]+' hello '+sid);
		$('#caname').html(songs[sid].artist);
		$('#csname').html(songs[sid].track);
		$('#cimage').attr('src',songs[sid].albumart);
		$('#mainsource').attr('src',''+songs[sid].source+'');
		
		$('#playerdiv').show();
		//$('#mainsource').attr('src','songs/Terry Muzic - intro.mp3');
		$('#splayer').html('<audio controls>'
		+'<source src="'+songs[sid].source+'" type="audio/mpeg">'
		+'</audio>');
		//alert(songs[sid].source);
		
		$('html, body').animate({ scrollTop: '1px'});
	});
});

var songs = [
	{
		'artist': 'Terry Muzic',
		'track':'intro',
		'source':'songs/Terry Muzic - intro.mp3',
		'albumart':'images/music_ph.png'
	},
	{
		'artist': 'Terry Muzic',
		'track':'Our God',
		'source':'songs/Terry Muzic - Our God.mp3',
		'albumart':'images/music_ph.png'
	},
	{
		'artist': 'Terry Muzic',
		'track':'Touched Heart',
		'source':'songs/Terry Muzic - Touched Heart.mp3',
		'albumart':'images/music_ph.png'
	},
	{
		'artist': 'Terry Muzic',
		'track':'Hosana',
		'source':'songs/Terry Muzik - Hosana.mp3',
		'albumart':'images/music_ph.png'
	}
]
	
	
