const sendmail = require('sendmail')();

export default async (req, res) => {
  const form = req.body;
  const emailTo = "danm.editing@gmail.com";

  form.photo ?

    sendmail({
      from: form.email,
      to: emailTo,
      subject: 'Website Message',
      html: form.message + " ",
      attachments: [
        {
          filename: 'photo.png',
          path: `/Users/danmurciano/Web-Dev/Projects/Jose/public/${form.photo}`
        }
      ]
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
    })

  :
    sendmail({
      from: form.email,
      to: emailTo,
      subject: 'Website Message',
      html: form.message + " "
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
    })

  res.status(200).json(emailTo);
}
