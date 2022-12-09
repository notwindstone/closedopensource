const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const owners = ['510709295814279168', '263349725099458566'];

const welcomeEmbedOther = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Прочее')
	.setDescription('Помимо всего вышеперечисленного, на нашем сервере есть ещё много чего интересного.')
	.setFields(
		{
			name: 'Правила',
			value: 'Что ж... как таковых правил у нас нет! Но это не повод бежать и флудить в <#725786415895674911>, ведь модерация всё ещё существует, кроме того, отсутствие правил означает то, что и для модерации их тоже нет.',
		},
		{
			name: 'Цитаты и StarBoard',
			value: 'На нашем сервере есть уникальный бот, который может генерировать из сообщения цитату, или пересылать их в канал <#1010639959293702234> при условии, что на том самом сообщении будет от трёх реакций <:spravebidlo:766243005681106954>.',
		},
		{
			name: 'Форумы',
			value: 'Довольно интересной особенностью сервера являются форумы. В канале <#1050052965693673482> Вы сможете задать какой-либо вопрос, поделиться новостью или даже рассказать о своей истории из жизни!',
		},
	)
	.setFooter(
		{
			text: 'Прочее',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('прочее')
		.setDescription('Создаёт эмбед прочего'),
	async execute(interaction) {
		if (owners.includes(interaction.user.id)) {
			return interaction.channel.send({ embeds: [welcomeEmbedOther] });
		}
		else {
			return interaction.reply({ content: 'Не хватает прав!', ephemeral: true });
		}
	},

};