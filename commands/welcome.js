const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const owners = ['510709295814279168', '263349725099458566'];

const welcomeEmbedInfo = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Добро пожаловать')
	.setDescription('Приветствуем Вас на ClosedOpenSource! По мере знакомства с сервером Вы встретите адекватное комьюнити и дружелюбную атмосферу. Общение тут проходит не только по темам Linux и FOSS, но и другим, отличающимся от основного направления сервера.')
	.setFooter(
		{
			text: 'Информация',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	)
	.setImage(
		'https://media.discordapp.net/attachments/551038566306938901/1049746386175930388/image.png?width=1200&height=313',
	);

const welcomeEmbedChannels = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Гид по каналам')
	.setDescription('dada')
	.setFooter(
		{
			text: 'Каналы',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	);

const welcomeEmbedRoles = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Гид по ролям')
	.setDescription('dada')
	.setFooter(
		{
			text: 'Роли',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	);

const welcomeEmbedSocials = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Социальные сети')
	.setDescription('• [Reddit](https://www.reddit.com/r/closedopensource/) – на нашем реддите Вы сможете найти полезную информацию по различным темам и не только\n• [YouTube](https://www.youtube.com/channel/UCpTYY-OhYWTeAQ98o9NH--A) – наш канал, на котором мы снимаем видео на тему Майнкрафт серверов\n• [Odysee](https://odysee.com/@closedopensource:7) – альтернативный видеохостинг, на который мы заливаем все наши видео с Ютуба')
	.setFooter(
		{
			text: 'Платформы',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	);

const welcomeEmbedOther = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Прочее')
	.setDescription('huy na')
	.setFooter(
		{
			text: 'Прочее',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('приветствие')
		.setDescription('Создаёт эмбед приветствия'),
	async execute(interaction) {
		if (owners.includes(interaction.user.id)) {
			return interaction.channel.send({ embeds: [welcomeEmbedInfo, welcomeEmbedChannels, welcomeEmbedRoles, welcomeEmbedSocials, welcomeEmbedOther] });
		}
		else {
			return interaction.reply({ content: 'Не хватает прав!', ephemeral: true });
		}
	},

};