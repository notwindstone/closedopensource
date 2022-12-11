// 909868759769042944
// Необходимое для Discord.js
const { Events } = require('discord.js');

// Ивент отправки сообщения в определённый канал
module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.channel.id === '909868759769042944') {
			message.react('⬆️')
				.then(() => message.react('⬇️'))
				// eslint-disable-next-line no-unused-vars
				.catch(_error => {
					console.log('Не удалось поставить реакцию. Либо участник добавил бота в ЧС, либо сообщение уже не доступно.');
				},
				);
		}
	},
};