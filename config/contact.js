module.exports = {
  smtp: {
    user: 'hello@langa.io',
    password: process.env.GMAIL_PASSWORD
  },
  email: {
    from: 'Langa Team',
    to: 'hello@langa.io',
    subject: 'Hello from Langa!'
  },
  hubspotKey: process.env.HUBSPOT_API_KEY
}
