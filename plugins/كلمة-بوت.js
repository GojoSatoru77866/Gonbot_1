let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*اسمي هو إيزومي كيوكا*`;
    await conn.sendMessage(m.chat, {
   react: {
 text: "💀",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://telegra.ph/file/26bc75e016614b21bba57.mp4', 'video.mp4' , message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
