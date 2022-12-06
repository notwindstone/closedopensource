const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');

const owners = ['510709295814279168', '263349725099458566'];

const rolesComponent = new ActionRowBuilder()
	.addComponents(
		new StringSelectMenuBuilder()
			.setCustomId('select')
			.setPlaceholder('Нажмите, чтобы выбрать роль')
			.setMinValues(0)
			.setMaxValues(6)
			.addOptions(
				{
					emoji: '<:News:1009808058874077224>',
					label: 'Объявления',
					description: 'Новости об изменениях на сервере',
					value: 'first_option',
				},
				{
					emoji: '<:Archive:1009813409816137808>',
					label: 'Архив',
					description: 'Доступ к архивным каналам сервера',
					value: 'second_option',
				},
				{
					emoji: '<:AustraliaChat:1009814674621091892> ',
					label: 'ГБУЗ ПКБ №1 ДЗМ',
					description: 'Вы сможете пообщаться с неуравновешенными',
					value: 'third_option',
				},
				{
					emoji: '📸',
					label: 'NSFW',
					description: 'Зачем?..',
					value: 'fourth_option',
				},
				{
					emoji: '<a:cool2:714290903300309092>',
					label: 'Аниме',
					description: 'Доступ в канал с аниме артами',
					value: 'fifth_option',
				},
				{
					emoji: '<:zigheil:1007278265976766554>',
					label: 'Политика',
					description: 'Обсуждение войны в Украине и не только',
					value: 'sixth_option',
				},
			),
	);

const rolesEmbed = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Выбор роли')
	.setDescription('В меню ниже Вы сможете получить роли, которые дадут доступ в специальные каналы. Убрать их можно в любой момент времени, снова отметив нужный Вам пункт.')
	.setFooter(
		{
			text: 'Роли',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	)
	.setThumbnail(
		'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('роли')
		.setDescription('Создаёт меню выбор ролей'),
	async execute(interaction) {
		if (owners.includes(interaction.user.id)) {
			return interaction.channel.send({ embeds: [rolesEmbed], components: [rolesComponent] });
		}
		else {
			return interaction.reply({ content: 'Не хватает прав!', ephemeral: true });
		}
	},

};