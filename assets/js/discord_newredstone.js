$(function() {
    $.getJSON('https://api.realya.ch/newredstone02', function(donnee) {
    $('#newredstone-avatar').html('<img class="rounded-circle" style="width: 80px;border-radius: 50px;" width="70px" src="https://cdn.discordapp.com/avatars/' + donnee.payload.discord.id + '/' + donnee.payload.discord.avatar + '">');
    $('#newredstone-user').html('<a style="color: white">'+ donnee.payload.discord.username + '#' + donnee.payload.discord.discriminator + '</a>');
    $('#newredstone-desc').html('</br><p class="text-center" style="color: white; font-size: 17px;">' + donnee.payload.user.details.description + '</p>');
    });
});
