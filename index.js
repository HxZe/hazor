//Calling the package
const Discord = require("discord.js");
const client = new Discord.Client();

//Listener Event: Message received 
client.on('message', message => {

	//Variables
	var sender = message.author;
	var msg = message.content.toUpperCase();
	var prefix = ';;'

	//Ping / Pong command
	if (msg === prefix + 'PING') {
		message.channel.send('Pong!')
	}

});

// Login
client.login("NDk1MDQ4NjE4NDU4NDgwNjQ3.Do8hVg.JWhw7VYMz7ZmUu0vn0DGYWWMgN0")