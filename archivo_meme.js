
$(document).ready(function() {
    
    $("#checkMeme").change(function() {
        if ($(this).is(":checked")) {
            
            $("#meme").css("background-image", "url('meme_epico.jpg')");
            $("#epic").fadeIn(); 
        } else {
            
            $("#meme").css("background-image", "url('meme_normal.jpeg')");
            $("#epic").fadeOut(); 
        }
    });
});


