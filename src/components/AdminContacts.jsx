import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    selectAdminContacts,
    selectAdminEmail,
    selectAdminError,
    selectAdminMessage,
    selectAdminSocials
} from "../store/content/selectors";
import {
    clearAdminError, clearAdminMessage, editBio,
    editContacts,
    editEmail,
    setAdminError, setAdminMessage,
    socialsDelete,
    uploadSocials
} from "../store/content/actions";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {SocialIcon} from "react-social-icons";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminContacts = ({token, lang}) => {
    const dispatch = useDispatch();
    const dbContacts = useSelector(selectAdminContacts);
    const [bio, setBio] = useState('');
    const [edit, setEdit] = useState(false);
    const [copied, setCopied] = useState('');
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const socials = useSelector(selectAdminSocials);
    const [newEmail, setNewEmail] = useState('');
    const email = useSelector(selectAdminEmail);

    useEffect(() => {
        setEdit(false);
        updateEdit();
    }, [dbContacts]);

    useEffect(() => {
        updateEdit();
    }, [lang])

    useEffect(() => {
        updateEdit();
    }, [dbContacts, edit]);

    const h3 = '<h3>ЗАГОЛОВОК</h3>';
    const span = '<span>ТЕКСТ</span>';

    const updateEdit = () => {
        if (dbContacts) {
            setBio(lang ? dbContacts.text_eng : dbContacts.text_ru)
        };

        if (dbContacts && !edit) {
            document.getElementById('contacts-container').innerHTML = ''
            const e = document.createElement('div');
            e.innerHTML = lang ? dbContacts.text_eng : dbContacts.text_ru;
            const bioContainer = document.getElementById('contacts-container');
            bioContainer.appendChild(e);
        }
    }

    const handleCancel = () => {
        setEdit(false);
    }

    const handleEdit = () => {
        dispatch(clearAdminMessage());

        setTimeout(() => {
            dispatch(editContacts({
                text: bio,
                lang: lang ? 'eng' : 'ru'
            }, token));
        },100);
    }

    const copyTextToClipboard = async () => {
        dispatch(clearAdminMessage());

        setTimeout(() => {
            dispatch(setAdminMessage('Сохранено в буфер обмена'))
        },100);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (link && name) {
            dispatch(clearAdminMessage());

            setTimeout(() => {
                dispatch(uploadSocials({
                    link: link, name: name
                }, token))
            },100);

        } else {
            dispatch(clearAdminError());

            setTimeout(() => {
                dispatch(setAdminError('Заполни поля, Кирилл'));
            },100);
        }
    }

    const handleSubmitEmail = (e) => {
        e.preventDefault();

        if (newEmail) {
            dispatch(editEmail({
                email: newEmail,
            }, token))
        }
    }

    const handleDelete = (id) => {
        dispatch(clearAdminMessage());

        setTimeout(() => {
            dispatch(socialsDelete(id, token));
        },100);

    }

    return (<>
        <div className="admin-content">
            {edit ? (<>
                <textarea className="bio-textarea" value={bio}
                          onChange={e => setBio(e.target.value)}></textarea>
                <div>
                    <CopyToClipboard
                        text={h3}
                        onCopy={copyTextToClipboard}>
                        <button style={{color: copied === 'clipboard-p' ? 'rgb(54, 191, 90)' : 'white'}}
                                id="clipboard-h3" className="admin-button"
                                onClick={e => setCopied(e.target.id)}>Заголовок
                        </button>
                    </CopyToClipboard>
                    <CopyToClipboard
                        text={span}
                        onCopy={copyTextToClipboard}>
                        <button style={{color: copied === 'clipboard-span2' ? 'rgb(54, 191, 90)' : 'white'}}
                                id="clipboard-span2" className="admin-button"
                                onClick={e => setCopied(e.target.id)}>Текст
                        </button>
                    </CopyToClipboard>
                </div>
                <button className="admin-button" onClick={handleCancel}>Отменить</button>
                <button className="admin-button" onClick={handleEdit}>Подтвердить</button>
            </>) : (<>
                <div id="contacts-container" className="bio-container"
                     style={{minHeight: 'max-content', maxHeight: 'max-content', paddingBottom: 0}}>
                </div>
                <div className="bio-container"
                     style={{minHeight: 'max-content', maxHeight: 'max-content', paddingTop: 0}}>
                    {socials?.map(social => (<SocialIcon url={social.link} fgColor='white' bgColor="rgba(0,0,0,0)"/>))}
                </div>
                <button className="admin-button" style={{marginBottom: 20}}
                        onClick={() => setEdit(true)}>Редактировать
                </button>
                <div id="contacts-container" className="bio-container"
                     style={{minHeight: 'max-content', maxHeight: 'max-content', paddingBottom: 0, paddingTop: 0}}>
                    Почта для связи:&nbsp;
                    {email}
                    <form action="" style={{margin: 12}} className="admin-video-add"
                          onSubmit={e => handleSubmitEmail(e)}>
                        <input type="text" value={newEmail} placeholder="Изменить почту"
                               onChange={e => setNewEmail(e.target.value)} onClick={() => setNewEmail('')}/>
                        <button className="admin-button" type="submit">Отправить</button>
                    </form>
                </div>
                <div>
                    <div className="pictures-container">
                        <div className="pictures-header">
                            <span style={{width: 200}}>Иконка</span>
                            <span style={{width: 200}}>Ссылка</span>
                            <span style={{width: 200}}>Название</span>
                            <span style={{width: 200}}>Действие</span>
                        </div>
                        {socials?.map(social => (<div className="admin-pic-container">
                                <div style={{width: 300}}>
                                    <SocialIcon url={social.link} fgColor='white' bgColor="rgba(0,0,0,0)"/>
                                </div>
                                <div style={{width: 300}}>{social.link}</div>
                                <div style={{width: 300}}>{social.name}</div>
                                <div style={{width: 300}} className="admin-icons">
                                    <div onClick={() => handleDelete(social.id)}>
                                        <DeleteIcon/>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                    <div className="admin-video-add">
                        <form action="" onSubmit={e => handleSubmit(e)}>
                            <input type="text" value={link} placeholder="Ссылка"
                                   onChange={e => setLink(e.target.value)} onClick={() => setLink('')}/>
                            <input type="text" value={name} placeholder="Название соц.сети"
                                   onChange={e => setName(e.target.value)} onClick={() => setName('')}/>
                            <button className="admin-button" type="submit">Отправить</button>
                        </form>
                    </div>
                </div>
            </>)}
        </div>
    </>);
};

export default AdminContacts;