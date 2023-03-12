
      var twitch = new Twitch.Embed("twitch-embed", {
        width: 400,
        height: 300,
        channel: "RockeyDoggy",
        parent: ["rockeydoggy.github.io"]
      });

      function twitchLogin() {
        var redirectUri = encodeURIComponent("https://rockeydoggy.github.io/testes.html");
        window.location.href = "https://id.twitch.tv/oauth2/authorize?client_id=seuclientid&redirect_uri=" + redirectUri + "&response_type=token&scope=user:read:email";
      }

      function twitchCallback() {
        var hash = window.location.hash.substring(1);
        var tokenParams = hash.split("&");
        var token = tokenParams[0].split("=")[1];
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.twitch.tv/helix/users", true);
        xhr.setRequestHeader("Authorization", "Bearer " + token);
        xhr.setRequestHeader("Client-ID", "y9qqxglpke7zxzf823otz1jhb1bd9l");
        xhr.onload = function() {
          if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var displayName = response.data[0].display_name;
            var userId = response.data[0].id;
            document.getElementById("user-info").innerHTML = "Usuário autenticado: " + displayName + " (ID: " + userId + ")";
          } else {
            console.log("Erro ao obter informações do usuário.");
          }
        };
        xhr.send();
      }

      document.getElementById("twitch-login-button").addEventListener("click", twitchLogin);

      if (window.location.pathname === "/auth/twitch") {
        twitchCallback();
      }
