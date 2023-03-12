
      var twitch = new Twitch.Embed("twitch-embed", {
        width: 720,
        height: 300,
        channel: "RockeyDoggy",
        parent: ["https://rockeydoggy.github.io"]
      });

      twitch.addEventListener(Twitch.Embed.AUTHENTICATE, function(auth) {
        var token = auth.token;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.twitch.tv/helix/users", true);
        xhr.setRequestHeader("Authorization", "Bearer " + token);
        xhr.setRequestHeader("Client-ID", "xyphtivx2n7mw5ec9xtatlcijycovm");
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
      });
