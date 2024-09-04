import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearAdminError, clearAdminMessage, editBio, setAdminError, setAdminMessage} from "../store/content/actions";
import {selectAdminBio, selectAdminError, selectAdminMessage} from "../store/content/selectors";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {selectLang} from "../store/lang/selectors";
import Message from "./Message";

const AdminBio = ({token, lang}) => {
    const dispatch = useDispatch();
    const dbBio = useSelector(selectAdminBio);
    const [bio, setBio] = useState('');
    const [edit, setEdit] = useState(false);
    const [copied, setCopied] = useState('');

    useEffect(() => {
        setEdit(false);
        updateEdit();
    }, [dbBio]);

    useEffect(() => {
        updateEdit();
    }, [lang])

    useEffect(() => {
        updateEdit();
    }, [dbBio, edit]);

    const p = '<p>ТЕКСТ</p>';
    const imgSrc = '<img src="' + process.env.REACT_APP_BACKEND_URL + '/image/НАЗВАНИЕ" alt="Фото-Кирилла"/>';
    const span = '<span>ОПИСАНИЕФОТКИ</span>'

    const updateEdit = () => {
        if (dbBio) {
            setBio(lang ? dbBio.text_eng : dbBio.text_ru)
        };

        if (dbBio && !edit) {
            document.getElementById('bio-container').innerHTML = '';
            const e = document.createElement('div');
            e.innerHTML = lang ? dbBio.text_eng : dbBio.text_ru;
            const bioContainer = document.getElementById('bio-container');
            bioContainer.appendChild(e);
        }
    }

    const handleCancel = () => {
        setEdit(false);
    }

    const handleEdit = () => {
        dispatch(clearAdminMessage());

        setTimeout(() => {
            dispatch(editBio({
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

    return (<>
        <div className="admin-content">
            {edit ? (<>
                <textarea className="bio-textarea" value={bio} onChange={e => setBio(e.target.value)}></textarea>
                <div>
                    <CopyToClipboard
                        text={p}
                        onCopy={copyTextToClipboard}>
                        <button style={{color: copied === 'clipboard-p' ? 'rgb(54, 191, 90)' : 'white'}}
                                id="clipboard-p" className="admin-button" onClick={e => setCopied(e.target.id)}>Абзац
                        </button>
                    </CopyToClipboard>
                    <CopyToClipboard
                        text={imgSrc}
                        onCopy={copyTextToClipboard}>
                        <button style={{color: copied === 'clipboard-img' ? 'rgb(54, 191, 90)' : 'white'}}
                                id="clipboard-img" className="admin-button"
                                onClick={e => setCopied(e.target.id)}>Картинка
                        </button>
                    </CopyToClipboard>
                    <CopyToClipboard
                        text={span}
                        onCopy={copyTextToClipboard}>
                        <button style={{color: copied === 'clipboard-span' ? 'rgb(54, 191, 90)' : 'white'}}
                                id="clipboard-span" className="admin-button"
                                onClick={e => setCopied(e.target.id)}>Описание картинки
                        </button>
                    </CopyToClipboard>
                </div>

                <button className="admin-button" onClick={handleCancel}>Отменить</button>
                <button className="admin-button" onClick={handleEdit}>Подтвердить</button>
            </>) : (<>
                <div id="bio-container" className="bio-container"></div>
                <button className="admin-button" onClick={() => setEdit(true)}>Редактировать</button>
            </>)}
        </div>
    </>);
};

export default AdminBio;