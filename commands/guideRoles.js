const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const owners = ['510709295814279168', '263349725099458566'];

const welcomeEmbedRoles = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Гид по ролям')
	.setDescription('Итак, что у нас по ролям, как их получать и что они дают?\n• <@&1003027508477837372> — роль администрации, которая занимается сервером, управляет каналами и ролями, а также рассказывает о новостях на сервере.\n• <@&1003027514093994134> — модерация данного сервера, следящая за порядком. Имеет право кикать и мутить.\n• <@&777247090929041449> — получают только отбитые люди, с этой ролью единственный доступный канал это <#919705123524055040>.\n• <@&751445732359274607> — автоматически выдаётся при бусте сервера.\n• <@&945593837387120640> — выдаётся, как ни странно, активным участникам этого сервера, которых довольно часто можно встретить в чате.\n• <@&774056945652990034> — название говорит само за себя. Выдаётся всем зашедшим сюда.')
	.setFooter(
		{
			text: 'Роли',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('роли')
		.setDescription('Создаёт эмбед гида по ролям'),
	async execute(interaction) {
		if (owners.includes(interaction.user.id)) {
			return interaction.channel.send({ embeds: [welcomeEmbedRoles] });
		}
		else {
			return interaction.reply({ content: 'Не хватает прав!', ephemeral: true });
		}
	},

};