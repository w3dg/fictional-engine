// loading lines: "https://gist.github.com/fourjr/f94fc112cef6da07fc274216d5755420"

const welcomeMessages = [
  "newMember joined the party.",
  "newMember is here.",
  "Welcome, newMember. We hope you brought pizza.",
  "A wild newMember appeared.",
  "newMember just landed.",
  "newMember just slid into the server.",
  "newMember just showed up!",
  "Welcome newMember. Say hi!",
  "newMember hopped into the server.",
  "Everyone welcome newMember!",
  "Glad you're here, newMember.",
  "Good to see you, newMember.",
  "Yay you made it, newMember!",
  "newMember just joined the server - glhf!",
  "newMember just joined. Everyone, look busy!",
  "newMember just joined. Can I get a heal?",
  "newMember joined your party.",
  "newMember joined. You must construct additional pylons.",
  "Ermagherd. newMember is here.",
  "Welcome, newMember. Stay awhile and listen.",
  "Welcome, newMember. We were expecting you ( ͡° ͜ʖ ͡°)",
  "Welcome, newMember. We hope you brought pizza.",
  "Welcome newMember. Leave your weapons by the door.",
  "A wild newMember appeared.",
  "Swoooosh. newMember just landed.",
  "Brace yourselves. newMember just joined the server.",
  "newMember just joined. Hide your bananas.",
  "newMember just arrived. Seems OP - please nerf.",
  "newMember just slid into the server.",
  "A newMember has spawned in the server.",
  "Big newMember showed up!",
  "Where's newMember? In the server!",
  "newMember hopped into the server. Kangaroo!!",
  "newMember just showed up. Hold my beer.",
  "Challenger approaching - newMember has appeared!",
  "It's a bird! It's a plane! Nevermind, it's just newMember.",
  "It's newMember! Praise the sun! \\\\[T]/",
  "Never gonna give newMember up. Never gonna let newMember down.",
  "Ha! newMember has joined! You activated my trap card!",
  "Cheers, love! newMember's here!",
  "Hey! Listen! newMember has joined!",
  "We've been expecting you newMember",
  "It's dangerous to go alone, take newMember!",
  "newMember has joined the server! It's super effective!",
  "Cheers, love! newMember is here!",
  "newMember is here, as the prophecy foretold.",
  "newMember has arrived. Party's over.",
  "Ready player newMember",
  "newMember is here to kick butt and chew bubblegum. And newMember is all out of gum.",
  "Hello. Is it newMember you're looking for?",
  "newMember has joined. Stay a while and listen!",
  "Roses are red, violets are blue, newMember joined this server with you",
];

function getRandomJoinMessage(username) {
  const randomMsg = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  return randomMsg.replace("newMember", username);
}

module.exports = { getRandomJoinMessage };
