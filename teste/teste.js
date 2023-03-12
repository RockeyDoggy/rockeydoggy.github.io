window.addEventListener('DOMContentLoaded', () => {
  const twitch = window.Twitch ? window.Twitch.ext : null;

  if (!twitch) {
    // Aguarda até que o objeto Twitch.ext seja definido pelo SDK da Twitch
    setTimeout(() => {
      const twitch = window.Twitch ? window.Twitch.ext : null;

      if (!twitch) {
        console.error('Twitch SDK não encontrado.');
        return;
      }

      // Continue com o seu código aqui, como adicionar o evento onAuthorized e criar o botão de login da Twitch
    }, 10000);
  } else {
    twitch.onAuthorized((auth) => {
      // Exibe as informações de autenticação na div
      const userInfo = document.getElementById('user-info');
      userInfo.innerHTML = `Usuário autenticado: ${auth['user_id']}`;
    });

    // Cria o botão de autenticação da Twitch
    const twitchLogin = new Twitch.LoginButton({
      // Substitua CLIENT_ID pelo seu Client ID
      client_id: 'wmvc2pcoaa2g2cno4ldyackeh3l8t7',
      redirect_uri: 'https://rockeydoggy.github.io/testes.html',
      scope: ['user_read'],
      width: 200,
      height: 40,
      theme: 'dark'
    });
    twitchLogin.attach('#twitch-login');
  }
});

