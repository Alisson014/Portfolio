'use client';
import { useState, ChangeEvent } from 'react';
import './ContactForm.css';

export default function ContactForm(){

    const [formData, setFormData] = useState({ name: '', company: '', subject: '', email: '', message: '' });


    function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        alert(formData.name + formData.company + formData.email + formData.subject + formData.message );
        setFormData({ name: '', company: '', subject: '', email: '', message: '' });
    }

    function handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ){

        setFormData({...formData, [e.target?.name]: e.target?.value});
        console.log(formData);
    }

    return(
        <div className="bg-gray-900 w-full p-3 sm:p-8 rounded-lg">
            <h1 className="text-2xl font-medium">Entre em contato</h1>
            <p>Estou aberto a novas oportunidades e ficarei muito feliz em recebê-las.</p>

            <form onSubmit={onSubmit}  className="contactForm">
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 w-full">
                    <input title='Preencha com seu nome' value={formData.name} onChange={handleChange} type="text" name="name" id="nameId" placeholder="Nome" required />
                    <input title='Preencha com o nome da sua empresa' value={formData.company} onChange={handleChange} type="text" name="company" id="companyId" placeholder="Empresa" required /> 
                </div>
                <input title='Preencha com o assunto da mensagem' value={formData.subject} onChange={handleChange} className="w-full" type="text" name="subject" id="subjectId" placeholder="Assunto" required />
                <input title='Preencha com seu email' value={formData.email} onChange={handleChange} className="w-full" type="email" name="email" id="emailId" placeholder="Email" required />
                <textarea title='Escreva a mensagem' value={formData.message} onChange={handleChange} className="w-full" name="message"  rows={5} placeholder="Mensagem" required />
                <button className='w-full bg-gray-800 hover:bg-blue-800 cursor-pointer py-3 rounded-lg' type='submit'>Enviar</button>
            </form>
        </div>
    );
}