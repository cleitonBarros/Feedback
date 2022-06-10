import { MailAdapter, SendMailData } from "../mail";
import nodemailer from 'nodemailer';


const  transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6affd71dc897e1",
      pass: "4c05f1a67b58ec"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail (data: SendMailData) {

        
   await transport.sendMail({
        from:'equipe feedget <oi@feedget.com',
        to: 'cleiton barros <cleiton.barrosmoura@gmail.com>',
        subject: data.subject,
        html: data.body,
    })

    };

}