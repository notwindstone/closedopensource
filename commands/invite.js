const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const owners = ['510709295814279168', '263349725099458566'];

const welcomeEmbedInvite = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Приглашение')
	.setDescription('На случай, если хотите кого-то добавить на наш сервер.')
	.setFooter(
		{
			text: 'Инвайт',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('приглашение')
		.setDescription('Создаёт эмбед инвайта'),
	async execute(interaction) {
		if (owners.includes(interaction.user.id)) {
			return interaction.channel.send({ embeds: [welcomeEmbedInvite] });
		}
		else {
			return interaction.reply({ content: 'Не хватает прав!', ephemeral: true });
		}
	},

};