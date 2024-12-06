import fs from 'fs'
import fetch from 'node-fetch'
import {
    xpRange
} from '../lib/levelling.js'
const {
    levelling
} = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import {
    promises
} from 'fs'
import {
    join
} from 'path'
let handler = async (m, {
    conn,
    usedPrefix,
    usedPrefix: _p,
    __dirname,
    text,
    isPrems
}) => {
    try {
        let vn = './Menu.png'
        let pp = imagen4
        let img = await (await fetch('https://telegra.ph/.')).buffer()
        let d = new Date(new Date + 3600000)
        let locale = 'ar'
        let week = d.toLocaleDateString(locale, {
            weekday: 'long'
        })
        let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        let user = global.db.data.users[m.sender]
        let {
            money,
            joincount
        } = global.db.data.users[m.sender]
        let {
            exp,
            limit,
            level,
            role
        } = global.db.data.users[m.sender]
        let {
            min,
            xp,
            max
        } = xpRange(level, global.multiplier)
        let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
        let more = String.fromCharCode(8206)
        let readMore = more.repeat(850)
        let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
        let str = `
*⎔⋅• ━ ╼╃ ◈ 〔♾️〕 ◈ ╄╾ ━ •⋅⎔*
*⭐📆التاريخ:* ${date}
*⭐🕛وقت نشط:* ${uptime}
*⭐🙇‍♂️المستخدمين:* ${rtotalreg}
*⭐🎖️ مستواك* ${level}
*⭐🧰 خبرتك ${exp}*
*⭐⚓ اللقب ${role}*

*💎الماسك:* ${limit}
*💰عملاتك:* ${money}
*🪙الرموز:* ${joincount}
*🎟️مميز؟:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
*⎔⋅• ━ ╼╃ ◈ 〔♾️〕 ◈ ╄╾ ━ •⋅⎔*
      ╮───────────────╭ـ
      │ *☚معـلـومـات الـبــوت ┇🤖*
      ╯───────────────╰ـ
*👻  اسمي , يوسانو أكيكو*
*👻 حط نقطه قبل الامر‼*  (.)*
*👻 اســم مطوري  Dazai🖤*
*👻اليك الاوامر ياقلب*  ${taguser}
*⎔⋅• ━ ╼╃ ◈ 〔♾️〕 ◈ ╄╾ ━ •⋅⎔*
      ╮───────────────╭ـ
      │ *☚قـائـمـة الـاوامـر ┇🤖*
      ╯───────────────╰ـ
*『 ️👥 』⇦ قسم الجروبات ╿↶*

*⚪┣.. المتصلين*
•يجيبلك المتصلين حاليا
*⚪┣.. ضيف* 
•يضيف ناس
*⚪┣.. طرد*
•يطرد الاعضاء
*⚪┣.. ترقية*
•يرفع العضو مشرف
*⚪┣.. اعفاء*
•ينزل الادمن
*⚪┣.. تحذير* 
•يدي تحذير للعضو
*⚪┣.. حذف_تحذير*
•يحذف التحذير
*⚪┣.. حذف*
•يحذف اي رساله
*⚪┣.. منشن*
•يمنشن للمجموعه
*⚪┣.. مخفي*
•منشن مخفي
*⚪┣.. منشني*
•يمنشن رقمك
*⚪┣.. المشرفين*
•يمنشن المشرفين
*⚪┣.. لمنشن*
•يحول الرساله لمنشن
*⚪┣.. بروفايل*
•يجيبلك بروفايلك
*⚪┣.. الجروب*
•معلومات الجروب
*⚪┣.. دعوه*
•يدعو الناس
*⚪┣.. تغيير_اللينك*
•يغير لينك المجموعه
*⚪┣.. لفل*
•يجيب ليفلك
*⚪┣.. جروب*
•يفتح ويقفل
*⚪┣.. الترحيب*
•ترحيب المجموعه
*⚪┣.. المغادره*
•مغادرة المجموعه 
*⚪┣.. ايات*
•يجيبلك ايات قرانيه
*⚪┣.. جروب قفل  فتح*
•يفتح ويقفل الجروب
*⚪┣.. خط*
•زخرفة الخطوط
*⚪┣.. توب*
•يجيب لك 10 عشوائي
*⚪┣.. لينك*
•يجيب لك لينك المجموعه
*⚪┣.. يومي*
•يعطيك هدايا
*⚪┣.. الماس*
•تعرف الالماس بتاعك
*⚪┣.. ترتيب_البنك*
•ترتيب الاكثر مال
*⚪┣.. شراء*
•شراء من المتجر
*⚪┣.. هجوم*
•يهجم على احد الاعضاء 
⚪┣.. المستوى
•يجيب لك مستواك

*『 ️🌙 』⇦ قسم الديـن ╿↶*

*✨┣.. سورة*
•يجيب لك سورة
*✨┣.. حديث*
•يجيب لك حديث
*✨┣.. قران*
•يجيب لك ايات قرانيه
*✨┣.. الله*
•يجيب لك اسماء الله
*✨┣.. ديني1*
•ديني1 ولحد7 يجيب قرأن

*『 ️🐐 』⇦ قسم المـطـور ╿↶*

*👤┣.. ضيف_بريميام*
•يضيف شخص بريميوم
*👤┣.. حذف_بريميام*
•يحذف البريميوم
*👤┣.. بان*
•يبند المستخدمين من البوت
*👤┣.. الغاء_البان*
•يلغى الباند
*👤┣.. اطفاء*
•اطفاء البوت
*👤┣.. تفعيل*
•تفعيل البوت
*👤┣.. المتبندين*
•يجيب المتبندين من البوت
*👤┣.. إعادة*
*👤┣.. اعادةتشغيل*
•اعادة تشغيل البوت
*👤┣.. أدخل*
•يدخل البوت جروبات
*👤┣.. ضيف_اكس_بي*
•يضيف للمستخدم اكسبي
*👤┣.. ضيف_جواهر*
•يضيف للمستخدم جواهر

•ملكش دعوة بالحاجات دي

*『 ️📺 』⇦ قسم التـنزيل ╿↶*

*🔍┣.. جوجل
•البحث ف عمنا جوجل
*🔍┣.. انستغرام*
•فيديوهات وصور انستا
*🔍┣.. انستا*
•يحمل فيديوهات او صور من الانستا
*🔍┣.. شغل*
•يشغل اي حاجه انت عاوزها
*🔍┣.. تيكتوك*
•ده مش شغال بعد عنو
*🔍┣.. تويتر*
يجيب لك الي عاوزه من التويت
*🔍┣.. اغنية*
•يجيبلك اغنيه
*🔍┣.. بحث*
•يبحث عن اي حاجه
*🔍┣.. فيديو*
تدور على فيديوهات
*🔍┣.. تطبيق*
•ينزل تطبيقات
*🔍┣.. صوره*
يجيبلك صوره الي انت عاوزها

*في اوامر مش شغاله انا محبتش اشغلها عشان مش مهمه*

*『 ️🎮 』⇦ قسم التـرفـية ╿↶*


*🕹┣.. اكس او*
•لعبة اكس او
*🕹┣.. علم*
•سؤال علم
*🕹┣.. عين*
•سؤال عين
*🕹┣.. صراحه*
•اسئلة صراحه
*🕹┣.. لو*
•اسئلة لو
*🕹┣.. هل*
•اسئلة هل
*🕹┣.. ترجم*
•يترجم لك اي لغه ف ام الكوكب
*🕹┣.. احزر*
•يديك شخصيات وانت اعرفها
*🕹┣.. زواج*
•يجوز اتنين عشوائي
*🕹┣.. انطق*
•ينطق اي حاجه
*🕹┣.. تاج*
•يقولك اول منشن يحبك او تاني منشن يكرهك
*🕹┣.. حكمه*
•يديك حكم من الي قلبك يحبها
*🕹┣.. ميمز*
•يجيب لك ميمز انمي
*🕹┣.. سوال*
•يجيب لك اسئلة انمي
*🕹┣.. خروف*
•يجيب لك خروف المجموعه
*🕹┣.. تعدين
•تعدين الاشياء

*『 ️🔄 』⇦ قسم الـتحـويل ╿↶*

*🎭┣.. ملصق*
•يصنع لك ملصق
*🎭┣.. سرقة*
•يسرق اي ملصق
*🎭┣.. لفيديو*
•يحول الملصق لفيديو
*🎭┣.. لصورة*
•يحول الملصق لصوره
*🎭┣.. لانمي*
•يحول صورتك لانمي
*🎭┣.. تخيل*
•اقعد تخيل بق🙂
*🎭┣.. مكس*
•والله م اعرف
*🎭┣.. لجواهر*
الاكسبي لجواهر
*🎭┣.. ستك*
•ملصق بردو
*🎭┣.. تلجراف*
•يحولك الفيديو والصورة لرابط تليجراف
*🎭┣.. لكرتون*
•صورتك تبقى كرتون
*🎭┣.. باركود*
•يخلي اي حاجه باركود

*『 ️🎼 』⇦ قسم الصوتيات ╿↶*

*🎤┣.. عميق*
*🎤┣.. منفوخ*
*🎤┣.. تخين*
*🎤┣.. صاخب*
*🎤┣.. سريع*
*🎤┣.. تخينن*
*🎤┣.. رفيع*
*🎤┣.. روبوت*
*🎤┣.. بطيء*
*🎤┣.. ناعم*
*🎤┣.. سنجاب*

انا تعبت استكشف بق براحتك🙂
👾┑━━━حـقـوق الـمـطـور━━━┍👾
*❗⇆ ادعمني ع اليوت ↯*
❗ده  مفيش معي يوتيوب
*❗⇆ رقـم الـمطـور  ↯*
❗ده  https://wa.me/+967778668252
👾┙━━━حـقـوق الـمـطـور━━━┍👾
`.trim()
        const _0x3c7cab = _0x5a1d;

        function _0x5a1d(_0x1b92fa, _0x42ca62) {
            const _0x5a1d39 = _0x42ca();
            _0x5a1d = function (_0x28d0f5, _0x342e36) {
                _0x28d0f5 = _0x28d0f5 - 0x0;
                let _0x4abc25 = _0x5a1d39[_0x28d0f5];
                return _0x4abc25;
            };
            return _0x5a1d(_0x1b92fa, _0x42ca62);
        }

        function _0x42ca() {
            const _0xe1e20e = ['2409147cMTtvV', '70SxKSwY', 'trim', '2708027tOnEUS', '831853GQAjyu', '6ZrUjVF', 'النقابة الافضل 💌', '406070MLYaeB', 'https://chat.whatsapp.com/GI3IFkhyEBJ9HBbkPQQhcW', '4YbGMkZ', '840496IPJeXP', '322835aPaRGc', 'VIDEO', '3639410cLSfPv', 'sender', '9LtUyCF'];
            _0x42ca = function () {
                return _0xe1e20e;
            };
            return _0x42ca();
        }(function (_0x2979d9, _0x233f8f) {
            const _0x32315e = _0x5a1d;
            const _0x3b1890 = _0x2979d9();
            while (!![]) {
                try {
                    const _0x2cc4d6 = parseInt(_0x32315e(0x5)) / 0x1 + parseInt(_0x32315e(0x1)) / 0x2 + -parseInt(_0x32315e(0xa)) / 0x3 * (parseInt(_0x32315e(0x3)) / 0x4) + parseInt(_0x32315e(0x7)) / 0x5 + -parseInt(_0x32315e(0xf)) / 0x6 * (parseInt(_0x32315e(0xd)) / 0x7) + parseInt(_0x32315e(0x4)) / 0x8 * (-parseInt(_0x32315e(0x9)) / 0x9) + -parseInt(_0x32315e(0xb)) / 0xa * (-parseInt(_0x32315e(0xe)) / 0xb);
                    if (_0x2cc4d6 === _0x233f8f) {
                        break;
                    } else {
                        _0x3b1890['push'](_0x3b1890['shift']());
                    }
                } catch (_0x3284ad) {
                    _0x3b1890['push'](_0x3b1890['shift']());
                }
            }
        }(_0x42ca, 0x772cd));
        let buttonMessage = {
            'image': pp,
            'caption': str[_0x3c7cab(0xc)](),
            'mentions': [m[_0x3c7cab(0x8)]],
            'footer': '' + wm,
            'headerType': 0x4,
            'contextInfo': {
                'mentionedJid': [m['sender']],
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': _0x3c7cab(0x6),
                    'mediaUrl': null,
                    'title': _0x3c7cab(0x0),
                    'body': null,
                    'thumbnail': img,
                    'sourceUrl': _0x3c7cab(0x2)
                }
            }
        };
        conn.sendMessage(m.chat, buttonMessage, {
            quoted: m
        })
        conn.sendMessage(m.chat, {
            audio: {
                url: 'https://files.catbox.moe/cazcmm.mp3'
            },
            mimetype: 'audio/mpeg',
            ptt: true
        }, {
            quoted: m
        })

    } catch {
        conn.reply(m.chat, '[❗خطاء❗]', m)
    }
}
handler.command = /^(help|الاوامر|menu|أوامر|menu|اوامر)$/i
handler.exp = 20
handler.fail = null
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
