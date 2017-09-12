
const twilio = require('twilio');

const accountSid = 'AC171799aca43f6957f29092d4341f0c2b';
const authToken = '927800454db7767a2433699dc7332d47';

module.exports = new twilio(accountSid, authToken);
