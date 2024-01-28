import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../Utils/Helpers';
import NatPic from '../../assets/photos/NatPic.png'
import './Contact.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please Enter A Valid Email');
            return;
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert(`Thank you for your email ${name}!  I will get back to you soon!`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setErrorMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
        console.log(templateParams);
    }
    return (
        <main className='flex flex-col items-center md:mb-0 min-h-screen bg-[#c2b39c] border-b-[6px] border-[#a8957b]'>
            <section className='border-t-[6px] border-b-[6px] md:border-[6px] border-[#a8957b]'>
                <LazyLoadImage id='NatPic' src={NatPic} />
            </section>
            <h2 className="heading-text text-[#4F7942] text-5xl md:text-6xl mt-5">contact me</h2>
            <form onSubmit={handleSubmit} className='emailForm flex flex-col content-center m-[20px] w-[50%] md:w-[40%]'>
                <input
                    className='input'
                    type='text'
                    placeholder='your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className='input'
                    type='email'
                    placeholder='your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='input'
                    type='subject'
                    placeholder='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    className='input'
                    cols='30'
                    rows='5'
                    placeholder='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
                <button className='submit-button' type='submit'>submit</button>
            </form>
            {errorMessage && (
                <article>
                    <p className="error-text text-[#1d110e] text-xl md:text-4xl mb-5">{errorMessage}</p>
                </article>
            )}
        </main>
    )
}

export default Contact;