'use-strict';

const commands = require('./commands');

const prefix = '!';

module.exports = msg => {
  if (msg.author.bot) return;
  const text = msg.content.trim();
  if (!text.startsWith(prefix)) return;
  const [cmd, ...args] = text.slice(prefix.length).split` `.map(s => s.trim()).filter(s => s);
  console.log(cmd, ...args);
  if (!commands[cmd]) return msg.channel.send(
    `${msg.author}  I don't recognize \`${prefix + cmd}\`. See \`${prefix}help\` for a list of available commands.`,
  );
  commands[cmd](msg, ...args);
};
