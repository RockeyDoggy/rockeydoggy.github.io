
      var twitch = new Twitch.Embed("twitch-embed", {
        width: 720,
        height: 300,
        channel: "RockeyDoggy",
        parent: ["https://codepen.io/RockeyDoggy/pen/NWLyjqX?editors=0010.com"]
      });

      twitch.addEventListener(Twitch.Embed.AUTHENTICATE, function(auth) {
        var token = auth.token;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.twitch.tv/helix/users", true);
        xhr.setRequestHeader("Authorization", "Bearer " + token);
        xhr.setRequestHeader("Client-ID", "tj6p9ip70k0wgtldrcq3edbsm5ekey");
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
