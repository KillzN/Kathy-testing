let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:KATHYBOT;;\nFN:KATHYBOT\nORG:KATHYBOT\nTITLE:\nitem1.TEL;waid=56955274723:56955274723\nitem1.X-ABLabel:KATHYBOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:KATHYBOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'KATHYBOT⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
