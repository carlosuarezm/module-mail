import nodemailer from "nodemailer";

    async function crearMailSender({host, port , secure, user, pass}){

      let transporter = nodemailer.createTransport({
        host,
        port,
        secure, // true for 465, false for other ports
        auth: {
          user,
          pass
        },
      });

          return{
              enviarMail: async ({destinatario, subject, text, }) => {
                let info = await transporter.sendMail({
                    from: user,
                    to: destinatario,
                    subject: subject, // Subject line
                    text: text, // plain text body
                  });
                  return info
              },
              
          }

    }

export {crearMailSender}