const Discord = require("discord.js")
const client = new Discord.Client()
const keepAlive = require("./server")

const MODPACK_NOTIFICATION = "Link to latest Valheim modpack: " + process.env['MODPACK_URL'] + "\n\n Installation instructions: Delete existing BepinEx folder from Valheim root folder (usually: C:\\Program Files (x86)\\steam\\steamapps\\common\\Valheim). Extract zip into Valheim root folder overwriting everything else.";

client.on("ready", () => {
  console.log('Logged in as ' + client.user.tag)
})

client.on("message", msg => {
  const discordMessage = msg.content;
  if (discordMessage === "!modpack") {
    msg.reply(MODPACK_NOTIFICATION)
  }
})

keepAlive()
client.login(process.env['DISCORD_TOKEN'])
