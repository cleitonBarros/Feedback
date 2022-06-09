import express  from 'express';

import nodemailer from 'nodemailer';

import { prisma } from './prisma';

const app = express();

app.use(express.json())

const  transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6affd71dc897e1",
      pass: "4c05f1a67b58ec"
    }
  });

app.post('/feedbacks', async (req,res)=>{
const feedback = await  prisma.feedback.create({
        data: {
            type: req.body.type,
            comment: req.body.comment,
            screenshot:req.body.screenshot
        }
    })
    return res.status(201).json({data:feedback})
})

transport.sendMail({
    from:'equipe feedget <oi@feedget.com',
    to: 'cleiton barros <cleiton.barrosmoura@gmail.com>',
    subject: 'Novo feedback',
    html:
    [
        `<p>Tipo do feedback: </p>`,
        `<p>Tipo do comment: </p>`,
    ].join('\n')
})



app.listen(3333,()=>{
    console.log('HTTP server running')
})