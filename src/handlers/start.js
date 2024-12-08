const saveUser = require("./users/save-user")
module.exports = async (ctx) => {
    const telegram_id = ctx.from.id
    const name = ctx.from.first_name
    const username = ctx.from.username

    await saveUser(telegram_id, name, username);
    await ctx.reply(`Salom ${ctx.from.first_name}\nKino kodini yuboring!`);
}