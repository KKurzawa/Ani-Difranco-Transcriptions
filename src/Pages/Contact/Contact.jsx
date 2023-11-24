import './Contact.css';
import { useState } from 'react';
import { validateEmail } from '../../Utils/Helpers';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'subject') {
            setSubject(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        alert(`Thank you for your submission ${name}!`);

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };
    return (
        <section className="container">
            <h2 className="text-black text-4xl mt-5">Contact Me</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    className='formInput'
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    className='formInput'
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                />
                <input
                    className='formInput'
                    id='subjectBody'
                    value={subject}
                    name="subject"
                    onChange={handleInputChange}
                    type="subject"
                    placeholder="Subject"
                />
                <textarea
                    className='messageBody'
                    id='messageBody'
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    placeholder="Message"
                />
                <button className="submit-button" type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </section>
    )
}

export default Contact