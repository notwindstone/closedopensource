const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const owners = ['510709295814279168', '263349725099458566'];

const welcomeEmbedChannels = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Гид по каналам')
	.setDescription('С ролями разобрались, теперь пришла очередь рассказать про каналы.\n• <#1003186522108989480> — место, где Вы можете взять себе дополнительные роли.\n• <#766659329742077983> — все новости и изменения на сервере публикуются там.\n• <#1000459443231793184> — полезная информация на множество различных тем.\n• <#725786415895674911> — основной чатик сервера, где мы общаемся на самые разные темы.\n• <#725807046452314174> — поболтать с ботами можно там, ровно также, как и спамить.\n• <#1010639959293702234> — все самые крутые сообщения попадают туда, подробнее узнать можно в следующих сообщениях.\n• <#818822903973412894> — мир копипаст.')
	.setFooter(
		{
			text: 'Каналы',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('каналы')
		.setDescription('Создаёт эмбед гида по каналам'),
	async execute(interaction) {
		if (owners.includes(interaction.user.id)) {
			return interaction.channel.send({ embeds: [welcomeEmbedChannels] });
		}
		else {
			return interaction.reply({ content: 'Не хватает прав!', ephemeral: true });
		}
	},

};