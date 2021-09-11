$(function() {
    $.getJSON('https://api.realya.ch/Valentindz', function(donnee) {
    $('#valentindz-avatar').html('<img class="rounded-circle" style="margin-top: 10px;margin-bottom: 10px;" width="150px" src="https://cdn.discordapp.com/avatars/' + donnee.payload.discord.id + '/' + donnee.payload.discord.avatar + '">');
    $('#valentindz-user').html('<a class="text-center text-danger m-0 fw-bold" style="color: #e41b23;font-size: 27px;">'+ donnee.payload.discord.username + '#' + donnee.payload.discord.discriminator + '</h6>');
    $('#valentindz-desc').html('</br><p class="text-center" style="color: white; font-size: 17px;">' + donnee.payload.user.details.description + '</p>');
    });
});
