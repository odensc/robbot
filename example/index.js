import Robbot from "robbot";
import zalgo from "zalgolize";

// Create a bot instance with a reddit account
// Must already be in a Robin room or bad stuff will happen
let bot = new Robbot("username", "password");

// Register a command "zalgo"
// This makes it so when someone says "!zalgo" it will run this function
bot.commands.on("zalgo", params => {
	// make sure they gave a message
	if (params.length <= 0) return;
	// send a message with the zalgoized message
	// we rejoin the params so spaced messages work
	bot.send(zalgo(params.join(" ")));
});

// Say a message when someone joins or leaves
bot.on("join", data => bot.send(`${data.user} joined.`));
bot.on("part", data => bot.send(`${data.user} left.`));

// Initialize the bot
// Connects to WebSocket, retrieves session etc.
bot.init();
