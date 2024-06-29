import telebot
from telebot.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

API_TOKEN = '6609160743:AAHAH5-zMOTQ7mgw04xl1v0Hby3GZoN0s94'
WEB_APP_URL = 'https://havers0n.github.io/telebot1.0/'  # URL вашего React веб-приложения

bot = telebot.TeleBot(API_TOKEN)

@bot.message_handler(commands=['start'])
def send_welcome(message):
    markup = ReplyKeyboardMarkup(row_width=1)
    web_app_info = WebAppInfo(url=WEB_APP_URL)
    web_app_button = KeyboardButton(text="Open Mini App", web_app=web_app_info)
    markup.add(web_app_button)
    bot.send_message(message.chat.id, "Welcome! Click the button below to open the Mini App.", reply_markup=markup)

@bot.message_handler(func=lambda message: 'web_app_data' in message.json)
def handle_web_app_data(message):
    data = message.web_app_data.data
    bot.send_message(message.chat.id, f"Received data from Mini App: {data}")

bot.polling()
