require('dotenv').config();
const telegramApiToken = process.env.TELEGRAM_API_TOKEN; // Use the telegramApiToken variable to authenticate with the Telegram Bot API
const {Telegraf} = require('telegraf');

const bot = new Telegraf(telegramApiToken);

bot.start((ctx) => {
    //handle the /start command
    ctx.reply('Welcome to the Healthy Recipe Bot! How can I assist you?');
});



//handle the /recipe command
bot.launch();
