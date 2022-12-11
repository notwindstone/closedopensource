const { EmbedBuilder } = require('discord.js');

const { SlashCommandBuilder } = require('discord.js');

const pingEmbed = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Проверка связи');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('пинг')
		.setDescription('Показывает пинг'),
	async execute(interaction) {
		pingEmbed.setDescription(`🏓 Задержка клиента ${interaction.createdTimestamp - Date.now()} мс\n⌛ Задержка Discord API ${Math.round(interaction.client.ws.ping)} мс`);
		return interaction.reply({ embeds: [pingEmbed] });
	},

};