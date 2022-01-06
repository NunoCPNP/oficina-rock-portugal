/* eslint-disable import/no-anonymous-default-export */
const mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

export default (req, res) => {
  if (!req.body) return res.status(400).json({ status: 'Error' })

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'nunocpereira@outlook.com',
          Name: 'Nuno',
        },
        To: [
          {
            Email: 'nunocpereira@outlook.com',
            Name: 'Nuno',
          },
        ],
        Subject: 'Oficina Rock Portugal.',
        TextPart: `Hi ${req.body} subscribed newsletter`,
        HTMLPart: `<div><p>Hi Nuno !</p><h3>${req.body}</h3><p>Subscribed Oficina Rock Newsletter</p></div>`,
        CustomID: 'ORNewSubscriber',
      },
    ],
  })

  request
    .then((result) => {
      console.log(result.body)

      res.status(200).json({ status: 'Success' })
    })
    .catch((err) => {
      console.log(err.statusCode)

      res.status(500).json({ status: 'Error' })
    })
}
