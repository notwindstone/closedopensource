const { SlashCommandBuilder } = require('discord.js');

const owners = ['510709295814279168', '263349725099458566'];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ссылка')
		.setDescription('Создаёт сообщение инвайта'),
	async execute(interaction) {
		if (owners.includes(interaction.user.id)) {
			return interaction.channel.send({ content: 'https://discord.gg/ff6mCHaMpJ' });
		}
		else {
			return interaction.reply({ content: 'Не хватает прав!', ephemeral: true });
		}
	},

};