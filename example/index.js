import Robbot from "robbot";

// Create a bot instance with a reddit account
// Must already be in a Robin room or bad stuff will happen
let bot = new Robbot("username", "password");

// Register a command "test"
// This makes it so when someone says "!test" it will run this function
// e.g. !test Hello world
bot.commands.on("test", params => {
	// make sure they gave a message
	if (params.length <= 0) return;
	// send their message back to them
	// we rejoin the params so spaced messages work
	bot.send(params.join(" "));
});

// Say a message when someone joins or leaves
bot.on("join", data => bot.send(`${data.user} joined.`));
bot.on("part", data => bot.send(`${data.user} left.`));

// Initialize the bot
// Connects to WebSocket, retrieves session etc.
bot.init();
