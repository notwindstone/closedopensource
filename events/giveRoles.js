// Необходимое для Discord.js
const { Events, EmbedBuilder } = require('discord.js');

// Создаём ивент
module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isStringSelectMenu()) return;
		const member = interaction.member;

		// "ключ": "ID роли"
		// Ключ берётся из пункта value в меню rolesComponent, которое находится в файле ../commands/roles.js
		const roles = {
			"first_option": "1009802101905428551",
			"second_option": "944940016554111056",
			"third_option": "1002925431793668178",
			"fourth_option": "1002925902797209691",
			"fifth_option": "996035751731023944",
			"sixth_option": "776323635099074583",
		};
        

		// Получаем ID выбранных в меню ролей
		const selected = interaction.values.map(value => roles[value]);
		// Берём роли мембера
		const memberRoles = member.roles.cache;
		// Берём значения из объекта
		const rolesIds = Object.values(roles);
		const memberHasThatRole = rolesIds.filter(roleId => memberRoles.has(roleId));

		// Берём ID ролей, которые у участника имеются, но не выбраны им в selected
		const removed = memberHasThatRole.filter(role => !selected.includes(role));
		// Берём ID ролей, которые у участника не имеются, но выбраны в selected
		const added = selected.filter(role => !memberHasThatRole.includes(role));

		const rolesChange = new EmbedBuilder()
		//    .setColor(3092790)
			.setColor(16241871)
			.setTitle('Изменение ролей')
			.setDescription('Успешное обновление Ваших ролей.')
			.setFooter(
				{
					text: 'Роли',
					iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
				},
			);

		console.log(removed, added);
    
		member.roles.remove(removed).catch(console.log).then((newMember) => newMember.roles.add(added));

		return interaction.reply({ embeds: [rolesChange], ephemeral: true });
	},
};