// Необходимое для Discord.js
const { Events, EmbedBuilder, StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

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

const welcomeEmbedChannels = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Гид по каналам')
	.setDescription('С ролями разобрались, теперь пришла очередь рассказать про каналы.\n• <#766659329742077983> — все новости и изменения на сервере публикуются там.\n• <#1000459443231793184> — полезная информация на множество различных тем.\n• <#725786415895674911> — основной чатик сервера, где происходит всё общение.\n• <#725807046452314174> — поболтать с ботами или поспамить можно там.\n• <#1010639959293702234> — все самые крутые сообщения попадают туда, подробнее узнать можно в пункте **Прочее**.\n• <#818822903973412894> — мир копипаст.')
	.setFooter(
		{
			text: 'Каналы',
			iconURL: 'https://cdn.discordapp.com/icons/725786415438364692/a_8904844391da8277010a5fcdfb33c19a.gif',
		},
	);

const welcomeEmbedSelect = new EmbedBuilder()
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

const welcomeEmbedOther = new EmbedBuilder()
//	.setColor(3092790)
	.setColor(16241871)
	.setTitle('Прочее')
	.setDescription('Помимо всего перечисленного, на нашем сервере есть ещё много чего интересного.')
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

// Создаём ивент
module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		const { customId } = interaction; 

		if (!interaction.isStringSelectMenu()) return;

		if (customId == 'select') {

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
		}
		else {
			// "ключ": "ID роли"
			// Ключ берётся из пункта value в меню rolesComponent, которое находится в файле ../commands/roles.js
			switch (interaction.values[0]) {
			case 'first_welcome': 
				return interaction.reply({ embeds: [welcomeEmbedRoles, welcomeEmbedChannels], ephemeral: true });
			case 'second_welcome':
				return interaction.reply({ embeds: [welcomeEmbedSelect], components: [rolesComponent], ephemeral: true });
			case 'third_welcome':
				return interaction.reply({ embeds: [welcomeEmbedSocials], ephemeral: true });
			case 'fourth_welcome':
				return interaction.reply({ embeds: [welcomeEmbedOther], ephemeral: true });
			case 'fifth_welcome':
				return interaction.reply({ content: 'https://discord.gg/ff6mCHaMpJ', embeds: [welcomeEmbedInvite], ephemeral: true });
			}
		
		}
	},
};