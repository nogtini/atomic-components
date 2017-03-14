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
  hubspot: {
    hubspotKey: process.env.HUBSPOT_API_KEY,
    portalId: process.env.HUBSPOT_PORTAL_ID,
    formId: process.env.HUBSPOT_FORM_ID
  }
}
