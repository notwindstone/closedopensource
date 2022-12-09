// Необходимое для Discord.js
const { Events } = require('discord.js');

// Ивент запуска бота, сработает только единожды
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Успешный запуск! Авторизован через ${client.user.tag}`);
	},
};