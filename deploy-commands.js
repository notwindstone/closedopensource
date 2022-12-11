// Необходимое для Node.js
const fs = require('node:fs');

// Необходимое для Discord.js
const { REST, Routes } = require('discord.js');

require('dotenv').config();
const clientId = process.env.APPLICATION_ID;
const guildId = process.env.GUILD_ID ;
const token = process.env.TOKEN;
// const { clientId, guildId, token } = require('./config.json');

const commands = [];
// Чтение всех файлов с расширением .js из каталога commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

// Подготовка к развёртыванию команд
const rest = new REST({ version: '10' }).setToken(token);

// Развёртывание команд
(async () => {
	try {
		console.log(`Начато обновление ${commands.length} команд (/) бота.`);

		// Метод put используется для полного обновления всех команд на сервере
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Успешно обновлены ${data.length} команды (/) бота.`);
	}
	catch (error) {
		// Логирование всех ошибок в консоли
		console.error(error);
	}
})();