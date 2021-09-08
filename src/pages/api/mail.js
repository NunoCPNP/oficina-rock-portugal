/* eslint-disable import/no-anonymous-default-export */
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SEND_GRID)

export default (req, res) => {
  console.log(req.body)

  const data = {
    to: 'nunocpereira@outlook.com',
    from: 'oficinarockpt@gmail.com',
    subject: 'New newsletter subscriber !',
    message: `Hey ! ${req.body} just signed the newsletter.`,
    html: `Hey ! ${req.body} just signed the newsletter.`,
  }

  // mail.send(data)

  res.status(200).json({ status: 'Success' })
}
