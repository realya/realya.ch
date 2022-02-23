$(function() {
    $.getJSON('https://api.realya.ch/?id=200582296732958723', function(donnee) {
    $('#slendy-avatar').html('<img class="rounded-circle" style="margin-top: 10px;margin-bottom: 10px;" width="150px" src="https://cdn.discordapp.com/avatars/' + donnee.discordID + '/' + donnee.discord.avatar + '">');
    $('#slendy-user').html('<h6 class="text-center text-danger m-0 fw-bold" style="color: #e41b23;font-size: 27px;">'+ donnee.discord.username + '#' + donnee.discord.discriminator + '</h6>');
    $('#slendy-desc').html('</br><p class="text-center" style="color: white; font-size: 17px;">' + donnee.about + '</p>');
    });
});