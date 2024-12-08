require('dotenv').config()
const CHANNEL_ID = process.env.CHANNEL_ID;

module.exports = async (ctx, next) => {
    if (ctx.message?.chat.type !== "private") {
        return next();
    }

    try {
        const member = await ctx.api.getChatMember(CHANNEL_ID, ctx.from.id);

        if (member.status === "left") {
            await ctx.reply(
                `📢 Iltimos, botdan foydalanish uchun ushbu kanalga obuna bo'ling: ${CHANNEL_ID}`,
                {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: "📲 Obuna bo'lish", url: `https://t.me/${CHANNEL_ID.replace("@", "")}` },
                            ],
                        ],
                    },
                }
            );
            return;
        }
    } catch (error) {
        console.error("Kanalga a'zolikni tekshirishda xatolik:", error);
        await ctx.reply("Kanalga obuna bo'lganlikni tekshirishda xatolik yuz berdi.");
        return;
    }

    await next();
};