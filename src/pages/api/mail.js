/* eslint-disable import/no-anonymous-default-export */
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SEND_GRID)

export default (req, res) => {
  if (!req.body) return res.status(400).json({ status: 'Error' })

  const data = {
    to: process.env.SEND_GRID_TO,
    from: process.env.SEND_GRID_FROM,
    subject: 'New newsletter subscriber !',
    message: `Hey ! ${req.body} just signed the newsletter.`,
    html: `Hey ! ${req.body} just signed the newsletter.`,
  }

  mail.send(data)

  res.status(200).json({ status: 'Success' })
}
