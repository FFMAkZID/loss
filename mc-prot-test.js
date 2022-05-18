var mc = require('minecraft-protocol');

var client = mc.createClient({
  host: "ffmakzid.aternos.me",   // optional
  port: 47942,         // optional
  username: "MAkZ_27"
});

client.on('chat', function(packet) {
  // Listen for chat messages and echo them back.
  var jsonMsg = JSON.parse(packet.message);
  var finalText = jsonMsg.extra.map(msgPart => msgPart.text).join('');

  if (finalText.startsWith('~koolkobra'))
    client.write('chat', { message: finalText });
  // if(jsonMsg.translate == 'chat.type.announcement' || jsonMsg.translate == 'chat.type.text') {
  //   console.log(jsonMsg.extra.map(msgPart => msgPart.text).join(''));
  //   // console.log(jsonMsg);
  //   var username = jsonMsg.with[0].text;
  //   var msg = jsonMsg.with[1];
  //   if(username === client.username) return;
  // }
});
