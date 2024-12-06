import fetch from 'node-fetch';
import fs from 'fs';
import jimp from 'jimp';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  let watermark = 'عمك دزاري;

  // جهز الرسائل الوهمية المختلفة
  let fakeContact = { 
    'key': { 
      'participants': '0@s.whatsapp.net', 
      'remoteJid': 'status@broadcast', 
      'fromMe': false, 
      'id': watermark 
    }, 
    'message': { 
      'contactMessage': { 
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
      } 
    }, 
    'participant': '0@s.whatsapp.net' 
  };

  let fakeGif = {
    key: { 
      participant: '0@s.whatsapp.net', 
      ...('6289643739077-1613049930@g.us' ? {remoteJid: '6289643739077-1613049930@g.us'} : {}) 
    }, 
    message: { 
      'videoMessage': { 
        'title': '𝐄𝐋𝐙𝟑𝐄𝐌 𝐆𝐎𝐍 𝐁𝐎𝐓', 
        'h': `Hmm`, 
        'seconds': '99999', 
        'gifPlayback': 'true', 
        'caption': watermark, 
        'jpegThumbnail': false
      } 
    }
  };

  let fakeLocation = {
    key: {
      fromMe: false,
      participant: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast'
    },
    message: {
      locationMessage: {
        degreesLatitude: 37.7749,
        degreesLongitude: -122.4194,
        name: '𝐄𝐋𝐙𝟑𝐄𝐌 𝐆𝐎𝐍 𝐁𝐎𝐓',
        address: 'سان فرانسيسكو، كاليفورنيا، الولايات المتحدة الأمريكية',
        url: 'https://maps.google.com/?q=37.7749,-122.4194'
      }
    }
  };

  let fakeText = {
    key: {
      fromMe: false,
      participant: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast'
    },
    message: {
      conversation: '𝐄𝐋𝐙𝟑𝐄𝐌 𝐆𝐎𝐍 𝐁𝐎𝐓'
    }
  };

  let fakeMessages = [fakeGif, fakeContact, fakeLocation, fakeText];
  let randomFakeMessage = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];

  let imageUrl = 'https://telegra.ph/file/1c5c89beaf762a0be6c11.jpg'; // رابط الصورة
  let randomPosterImage = 'https://telegra.ph/file/1c5c89beaf762a0be6c11.jpg'; // صورة العرض

  let recipient = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let orderInfo = { 
    key: { 
      remoteJid: 'status@broadcast', 
      participant: '0@s.whatsapp.net' 
    }, 
    message: { 
      orderMessage: { 
        itemCount: 2023, 
        status: 1, 
        thumbnail: 'https://i.imgur.com/RbaRjrb.jpeg', 
        surface: 1, 
        message: watermark, 
        orderTitle: watermark, 
        sellerJid: '0@s.whatsapp.net' 
      } 
    } 
  };

  let name = await conn.getName(recipient);

  let delay = time => new Promise(res => setTimeout(res, time));
  await conn.sendContact(m.chat, [[`201146121794@s.whatsapp.net`, watermark]], randomFakeMessage, {
    contextInfo: { 
      forwardingScore: 2023,
      isForwarded: false, 
      externalAdReply: {  
        title: '𝐄𝐋𝐙𝟑𝐄𝐌 𝐆𝐎𝐍', 
        body: watermark, 
        sourceUrl: 'https://wa.me/201146121794',
        thumbnail: randomPosterImage,
        thumbnailUrl: randomPosterImage, 
        mediaType: 1,
        showAdAttribution: true, 
        renderLargerThumbnail: true, 
        mentionedJid: [m.sender]
      }
    }
  }, { quoted: randomFakeMessage });
};

handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|مطور|المطور)$/i;

export default handler;

async function getBuffer(url) {
  return new Promise(async (resolve, reject) => {
    let buffer;
    await jimp
      .read(url)
      .then((image) => {
        image.getBuffer(image._originalMime, function (err, res) {
          buffer = res;
        });
      })
      .catch(reject);
    if (!Buffer.isBuffer(buffer)) reject(false);
    resolve(buffer);
  });
}
