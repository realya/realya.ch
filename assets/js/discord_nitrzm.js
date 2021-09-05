$(function() {
    $.getJSON('https://api.realya.ch/nitrzm', function(donnee) {
    $('#nitrzm-avatar').html('<img class="border rounded-pill border-danger shadow-lg" style="width: 80px;border-radius: 50px;" width="70px" src="https://cdn.discordapp.com/avatars/' + donnee.payload.discord.id + '/' + donnee.payload.discord.avatar + '">');
    $('#nitrzm-user').html('<a class="text-center" style="color: white">'+ donnee.payload.discord.username + '#' + donnee.payload.discord.discriminator + '</a>');
    $('#nitrzm-desc').html('</br><p class="text-center" style="color: white; font-size: 17px;">' + donnee.payload.user.details.description + '</p>');
    });
});
