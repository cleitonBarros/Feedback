import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImgUrl from "../../image/Bug.svg"
import ideaImgUrl from "../../image/Idea.svg";
import thoughtImgUrl from "../../image/Thought.svg";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";

//tipo de feedback
export const feedBackTypes={
    BUG:{
        title:'Problema',
        image:{
            source:bugImgUrl,
            alt: 'imagem de um inseto',
        }
    },
    IDEA: {
        title:"Ideia",
        image:{
            source: ideaImgUrl,
            alt: 'imagem de um lampada',
        }
    },
    OTHER:{
        title:"Outros",
        image:{
            source: thoughtImgUrl,
            alt: 'imagem de uma balão de pensamentos',
        }
    },
}
export type FeedbackType = keyof typeof feedBackTypes

export function WidgetForm(){

    const [feedbackType,setFeedbackType] = useState<FeedbackType|null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback(){
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl  mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"> 
           {feedbackSent ?(
               <FeedbackSuccessStep
               onFeedbackRestartReq={handleRestartFeedback}
               />

           ):(
            <>
                {!feedbackType ? (
                < FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                ):(
                <FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartReq={handleRestartFeedback}
                onFeedbackSent={()=>setFeedbackSent(true)}
                />      
              )}
            </>
           )}

           

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a href="https://github.com/cleitonBarros">Kimevery</a> 
            </footer>

        </div>
    )
}