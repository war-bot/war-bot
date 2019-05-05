'use-strict';

const handleErr = require('./handleErr');

module.exports = (msg, ...args) => msg.channel.send(args.join` `).catch(handleErr(msg));
