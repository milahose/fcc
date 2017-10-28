const twitchUsers = ["freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "habathcx", "RobotCaleb", "noobs2ninjas", "geoffstorbeck", "MedryBW"];
const streamsURL = 'https://wind-bow.glitch.me/twitch-api/streams/';
const channelsURL = `https://wind-bow.glitch.me/twitch-api/channels/`;

const getUsers = () => {
  twitchUsers.forEach((user) => {
    console.log(user);
    $.ajax({ 
      url: `${streamsURL}${user}`,
      dataType: "json",
      success: (data) => {
        console.log(data)
        if (data.stream !== null) {
          $('.all').append(`<a href="https://go.twitch.tv/${data.stream.channel.display_name}" target="_blank">
              <div class="online">
                <img src="${data.stream.channel.logo}" alt="Logo" />
                <h2>${data.stream.channel.display_name} <span class="online"></span></h2>
                <p>${data.stream.channel.status}</p>
              </div>
            </a>`);
        } else {
          $.ajax({ 
            url: `${channelsURL}${user}`,
            dataType: "json",
            success: (data) => {
              console.log(data);
              $('.all').append(`<a href="https://go.twitch.tv/${data.display_name}" target="_blank">
                <div class="offline">
                  <img src="${data.logo}" alt="Logo" />
                  <h2>${data.display_name} <span class="offline"></span></h2>
                </div>
              </a>`);
            }
          });
        }
      }
     });
  });
}

$(document).ready(() => {
  $('.all-btn').on('click', () => {
    $('.online').show();
    $('.offline').show();
  });

  $('.online-btn').on('click', () => {
    $('.online').show();
    $('.offline').hide();
  });

  $('.offline-btn').on('click', () => {
    $('.online').hide();
    $('.offline').show();
  });

  getUsers();
});