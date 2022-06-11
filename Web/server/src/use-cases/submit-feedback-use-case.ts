import { MailAdapter } from "../email/mail";
import { FeedbacksRepository } from "../repositories/feedbacks-repository"

interface  SubmitFeedbackUseCaseRequest{
    type: string
    comment: string
    screenshot ?: string

}




export class SubmitFeedbackUseCase{
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter:MailAdapter,
    ){}
    async execute(request:SubmitFeedbackUseCaseRequest){
        const {type, comment,screenshot} = request;

        if(!type){
            throw new Error('type is required');
        }
        if(!comment){
            throw new Error('comment is required');
        }
        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid screenshot format')
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'novo feekback',
            body: [
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Tipo de comentario: ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" />`: null,
                
                
            ].join('\n')
        })
    }
}