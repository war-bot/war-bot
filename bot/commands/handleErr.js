'use-strict';

/* eslint-disable no-console */
module.exports = msg => ({code, message, stack}) => {
  const user = `${msg.author.username}#${msg.author.discriminator}`;
  // Cannot send an empty message
  if (code === 50006) msg.channel.send(`${msg.author}  ${message}`).catch(console.error);
  console.log(
    `user: ${user} content: ${msg.content}\n`,
    stack,
  );
};
