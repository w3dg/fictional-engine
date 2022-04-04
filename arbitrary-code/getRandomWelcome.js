const { getRandomJoinMessage } = require("./discordJoinMessages");

setInterval(() => {
  const message = getRandomJoinMessage("John");
  console.log(message);
}, 1000);
