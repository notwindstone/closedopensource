const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const owners = ['510709295814279168', '263349725099458566'];

const welcomeEmbedSocials = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Социальные сети')
	.setDescription('В дополнение к этому Discord серверу, **ClosedOpenSource** есть и на других платформах!\n• [Telegram](https://t.me/democracysucks) – альтернативный чат, в котором иногда появляется довольно интересная информация.\n• [Reddit](https://www.reddit.com/r/closedopensource/) – на нашем реддите Вы сможете найти полезные материалы по темам Linux\'а, Minecraft серверов и не только.\n• [YouTube](https://www.youtube.com/channel/UCpTYY-OhYWTeAQ98o9NH--A) – наш канал, на котором мы снимаем видео на тему Minecraft серверов.\n• [Odysee](https://odysee.com/@closedopensource:7) – ещё один видеохостинг, на который мы заливаем все наши видео с Ютуба.')
	.setFooter(
		{
			text: 'Платформы',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('платформ')
		.setDescription('Создаёт эмбед с альтернативными платформами'),
	async execute(interaction) {
		if (owners.includes(interaction.user.id)) {
			return interaction.channel.send({ embeds: [welcomeEmbedSocials] });
		}
		else {
			return interaction.reply({ content: 'Не хватает прав!', ephemeral: true });
		}
	},

};