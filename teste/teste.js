enviarA.addEventListener('click', ()=>{
   window.load('https://id.twitch.tv/oauth2/authorize?client_id=wmvc2pcoaa2g2cno4ldyackeh3l8t7&redirect_uri=https://rockeydoggy.github.io/test.html&response_type=token&scope=user:read:email', '_self');
});
                         
function authenticate() {
  window.load('https://id.twitch.tv/oauth2/authorize?client_id=wmvc2pcoaa2g2cno4ldyackeh3l8t7&redirect_uri=https://rockeydoggy.github.io/test.html&response_type=token&scope=user:read:email', '_self');
  Twitch.authenticate({
    client_id: 'wmvc2pcoaa2g2cno4ldyackeh3l8t7',
    redirect_uri: 'https://rockeydoggy.github.io/test.html',
    scope: ['user_read'],
    response_type: 'token'
  });
}

function handleRedirect() {
  if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    var accessToken = hash.split('&')[0].split('=')[1];

    Twitch.api({method: 'user'}, function(error, user) {
      if (error) {
        console.log(error);
      } else {
        var userIs = user.display_name;
        document.getElementById('username').innerHTML = userIs;
      }
    });
  }
}
