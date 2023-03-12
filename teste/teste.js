
    window.addEventListener('DOMContentLoaded', () => {
      const twitch = window.Twitch.ext;

      twitch.onAuthorized((auth) => {
        // Exibe as informações de autenticação na div
        const userInfo = document.getElementById('user-info');
        userInfo.innerHTML = `Usuário autenticado: ${auth['user_id']}`;
      });

      // Cria o botão de autenticação da Twitch
      const twitchLogin = new Twitch.LoginButton({
        // Substitua CLIENT_ID pelo seu Client ID
        client_id: 'xyphtivx2n7mw5ec9xtatlcijycovm',
        redirect_uri: 'https://rockeydoggy.github.io/testes.html',
        scope: ['user_read'],
        width: 200,
        height: 40,
        theme: 'dark'
      });
      twitchLogin.attach('#twitch-login');
    });
