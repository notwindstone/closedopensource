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
					label: 'Шизофрения',
					description: 'Вы сможете пообщаться с неуравновешенными',
					value: 'third_option',
				},
				{
					emoji: '<:zigheil:1007278265976766554>',
					label: 'Политика',
					description: 'Обсуждение войны в Украине и не только',
					value: 'fourth_option',
				},
				{
					emoji: '<a:cool2:714290903300309092>',
					label: 'Аниме',
					description: 'Доступ в канал с аниме артами',
					value: 'fifth_option',
				},
				{
					emoji: '📸',
					label: 'NSFW',
					description: 'Зачем?..',
					value: 'sixth_option',
				},
			),
	);

const rolesEmbed = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Выбор роли')
	.setDescription('В меню ниже Вы сможете получить роли, которые дадут доступ в специальные каналы. Убрать их можно в любой момент времени, снова отметив нужный Вам пункт.')
	.setFields(
		{
			name: 'Функции ролей',
			value: 'За что же отвечает каждая из ролей, представленных в списке ниже?\n• <@&1009802101905428551> — с этой ролью Вас будут пинговать о всех новостях и изменениях на сервере.\n• <@&944940016554111056> — заполучив данную роль, Вы откроете архивный раздел сервера, в котором лежат десятки каналов.\n• <@&1002925431793668178> — благодаря данной роли у Вас будет возможность побывать в обезьяннике.\n• <@&1002925902797209691> — роль отвечает за доступ к каналу, в котором происходит обсуждение политики и войны в Украине.\n• <@&996035751731023944> — при помощи этой роли Вы сможете открыть для себя кучу аниме артов.\n• <@&776323635099074583> — с данной ролью появится доступ к каналу <#989180959620493342>, в котором Вы можете кидать то, что не пропускается фильтром дискорда в <#725786415895674911>.',
		},
	)
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
		.setName('выбор')
		.setDescription('Создаёт меню выбора ролей'),
	async execute(interaction) {
		if (owners.includes(interaction.user.id)) {
			return interaction.channel.send({ embeds: [rolesEmbed], components: [rolesComponent] });
		}
		else {
			return interaction.reply({ content: 'Не хватает прав!', ephemeral: true });
		}
	},

};