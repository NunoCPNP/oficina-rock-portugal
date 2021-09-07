/* eslint-disable import/no-anonymous-default-export */
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SEND_GRID)

export default (req, res) => {
  // const body = JSON.parse(req.body)

  const data = {
    to: 'nunocpereira@outlook.com',
    from: 'oficinarockpt@gmail.com',
    subject: 'New newsletter subscriber !',
    message: 'Hey just a simple test',
    html: 'Hey just a simple test',
  }

  mail.send(data)

  res.status(200).json({ status: 'Ok' })
}
