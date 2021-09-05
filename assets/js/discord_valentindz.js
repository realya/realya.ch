$(function() {
    setTimeout(() => {  
    $.getJSON('https://api.realya.ch/valentindz', function(donnee) {
    $('#valentindz-avatar').html('<img class="border rounded-pill border-danger shadow-lg" style="width: 80px;border-radius: 50px;" width="70px" src="https://cdn.discordapp.com/avatars/' + donnee.payload.discord.id + '/' + donnee.payload.discord.avatar + '">');
    $('#valentindz-user').html('<a class="text-center" style="color: white">'+ donnee.payload.discord.username + '#' + donnee.payload.discord.discriminator + '</a>');
    $('#valentindz-desc').html('</br><p class="text-center" style="color: white; font-size: 17px;">' + donnee.payload.user.details.description + '</p>');
    });
    }, 1500);
});
