import nodemailer from 'nodemailer';
import express from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
//import { prisma } from './prisma';


export const routes = express.Router();

const  transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6affd71dc897e1",
      pass: "4c05f1a67b58ec"
    }
  });

routes.post('/feedbacks', async (req,res)=>{
    const {type, comment, screenshot}= req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const submitFeedbackUseCase =  new SubmitFeedbackUseCase(prismaFeedbacksRepository)
    await submitFeedbackUseCase.execute({

        type,
        comment,
        screenshot,
    }
    )
/*
   await transport.sendMail({
        from:'equipe feedget <oi@feedget.com',
        to: 'cleiton barros <cleiton.barrosmoura@gmail.com>',
        subject: 'Novo feedback',
        html:[
            `<div>`,
            `<p>Tipo do feedback:${req.body.type} </p>`,
            `<p>Tipo do comment: ${req.body.comment} </p>`,
            `</div>`
        ].join('\n')
    })*/
    return res.status(201).send()
})