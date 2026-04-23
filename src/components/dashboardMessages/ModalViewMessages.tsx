'use client';
import { SetStateAction } from "react";

import { MessageType } from "../mockedData/MockedData";

type ModalViewMessagesType = {
    isActive: boolean,
    setIsActive: React.Dispatch<SetStateAction<boolean>>,
    message: MessageType,
    setIsUpdating: React.Dispatch<SetStateAction<boolean>>,
}

export default function ModalViewMessages({ isActive, setIsActive, message } : ModalViewMessagesType){

    return(
        <div onClick={() => setIsActive(false)} className={`fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-black/60 ${isActive ? 'opacity-100 mt-0 z-50' : 'opacity-0 mt-10 -z-10'} transition-all duration-500`}>
            <div onClick={(e) => e.stopPropagation()} className="contactForm bg-linear-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 p-4">
                <h1 className="text-xl font-medium text-center mb-2">Visualizar Mensagem</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 w-full">
                    <input readOnly value={message.name} type="text" name="name" id="nameId" placeholder="Nome" />
                    <input readOnly value={message.company} type="text" name="company" id="companyId" placeholder="Empresa" required /> 
                </div>
                <input readOnly value={message.subject} className="w-full" type="text" name="subject" id="subjectId" placeholder="Assunto" required />
                <input readOnly value={message.email} className="w-full" type="email" name="email" id="emailId" placeholder="Email" required />
                <textarea readOnly value={message.message} className="w-full" name="message"  rows={5} placeholder="Mensagem" required />
            </div>
        </div>
    );
}