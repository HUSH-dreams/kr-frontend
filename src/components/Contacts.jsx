import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectEmailError, selectEmailMessage, selectSocials} from "../store/content/selectors";
import {sendEmail, sendEmailError, sendEmailStart} from "../store/content/actions";
import {SocialIcon} from "react-social-icons";
import {selectButtons, selectInputs, selectTexts} from "../store/lang/selectors";
import Message from "./Message";

const Contacts = ({htmlContent, thisEmail, lang}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const emailMessage = useSelector(selectEmailMessage);
    const emailError = useSelector(selectEmailError);
    const socials = useSelector(selectSocials);
    const texts = useSelector(selectTexts);
    const inputs = useSelector(selectInputs);
    const buttons = useSelector(selectButtons);

    const update = () => {
        if (htmlContent) {
            document.getElementById('contacts-content').innerHTML = '';
            const e = document.createElement('div');
            e.innerHTML = lang ? htmlContent.text_eng : htmlContent.text_ru;
            const contactsContainer = document.getElementById('contacts-content');
            contactsContainer.appendChild(e);
        }
    }

    useEffect(() => {
        update();
    }, [htmlContent, lang, thisEmail])

    const handleSendEmail = (e) => {
        e.preventDefault()

        if (email && name && message) {
            dispatch(sendEmail({
                email: email, name: name, message: message
            }))

            setEmail('');
            setName('');
            setMessage('');
        } else {
            dispatch(sendEmailError('Заполните все поля'));
        }
    }

    return (<>
        <div className="content-contacts">
            <div>
                <div id="contacts-content" className="contacts-content"></div>
                <div style={{marginBottom: 10}}>
                    {
                        socials && socials.map(social => (
                            <SocialIcon url={social.link} fgColor='white' bgColor="rgba(0,0,0,0)"/>
                        ))
                    }
                </div>
                <div id="contacts-content" className="contacts-content">
                    <h3>{texts.email}:</h3>
                    <span>{thisEmail}</span>
                </div>
                <h3>{texts.sendEmail}:</h3>
                <form action="" onSubmit={handleSendEmail}>
                    <input style={{
                        borderColor: email ? 'green' : 'white',
                        outline: email ? '1px solid green' : 'none',
                        marginTop: 10
                    }}
                           type="email" id="email" name="email" value={email} placeholder={inputs.yourEmail}
                           onChange={e => setEmail(e.target.value)}
                           onClick={() => setEmail('')}/>
                    <input style={{
                        borderColor: name ? 'green' : 'white',
                        outline: name ? '1px solid green' : 'none'
                    }} type="text" id="name" name="name" value={name} placeholder={inputs.yourName}
                           onChange={e => setName(e.target.value)}
                           onClick={() => setName('')}/>
                    <textarea style={{
                        borderColor: message ? 'green' : 'white',
                        outline: message ? '1px solid green' : 'none'
                    }} id="message" name="message" value={message} placeholder={inputs.message}
                              onChange={e => setMessage(e.target.value)}
                    />
                    <button onClick={e => handleSendEmail(e)}>{buttons.send}</button>
                </form>
                {emailMessage && <Message message={emailMessage} action={sendEmailStart} isError={false}/>}
                {emailError && <Message message={emailError} action={sendEmailStart} isError={true}/>}
            </div>
        </div>
    </>);
};

export default Contacts;