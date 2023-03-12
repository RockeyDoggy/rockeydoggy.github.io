  window.addEventListener('load', function() {
    if (Twitch && Twitch.ext) {
      // Coloque o código que usa a variável Twitch aqui
    } else {
      console.log('Twitch SDK não foi carregado corretamente');
    }
  });

  // Inicialize o SDK da Twitch
  window.addEventListener('load', function() {
    Twitch.init({
      clientId: 'xyphtivx2n7mw5ec9xtatlcijycovm'
    });
  });
  // Adicione um evento de clique ao botão de login
  document.getElementById('twitch-login-button').addEventListener('click', function() {
    // Chame a função de autenticação da Twitch
    Twitch.login({
      scope: 'user:read:email',
      redirect_uri: 'https://rockeydoggy.github.io/testes'
    });
  });

  // Adicione um listener para o evento de autenticação bem sucedida
  Twitch.events.addListener('auth.login', function(user) {
    // Exiba o nome de usuário autenticado na página
    document.getElementById('username-input').value = user.display_name;
  });
