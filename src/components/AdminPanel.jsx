import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectLoginError, selectToken, selectUser} from "../store/user/selectors";
import Login from "./Login";
import {logoutSuccess} from "../store/user/actions";
import {useNavigate} from "react-router-dom";
import AdminVideo from "./AdminVideo";
import AdminPhoto from "./AdminPhoto";
import AdminBio from "./AdminBio";
import AdminContacts from "./AdminContacts";
import {adminError, adminInitiate, clearAdminError, clearAdminMessage} from "../store/content/actions";
import Flags from "./Flags";
import AdminSchedule from "./AdminSchedule";
import {selectLang} from "../store/lang/selectors";
import {selectAdminError, selectAdminMessage} from "../store/content/selectors";
import AdminMessage from "./AdminMessage";

const AdminPanel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector(selectLoginError);
    const adminError = useSelector(selectAdminError);
    const message = useSelector(selectAdminMessage);
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const lang = useSelector(selectLang);
    const [menuItem, setMenuItem] = useState('admin-schedule');

    useEffect(() => {
        if (user && token) {
            dispatch(adminInitiate(token))
        }
    }, [user])

    const handleLogout = () => {
        dispatch(logoutSuccess());
        navigate('/');
    }

    const handleMenu = (id) => {
        setMenuItem(id);
    }

    function renderContent (menu) {
        switch (menu) {
            case 'admin-schedule':
                return <AdminSchedule token={token} lang={lang}/>;
            case 'admin-video':
                return <AdminVideo token={token}/>;
            case 'admin-photo':
                return <AdminPhoto token={token}/>;
            case 'admin-bio':
                return <AdminBio token={token} lang={lang}/>;
            case 'admin-contacts':
                return <AdminContacts token={token} lang={lang}/>
            default:
                return;
        }
    }

    return (<>
            <div className="admin-wrapper">
                {user ? (
                <div className="admin-container">
                    <div className="admin-h">
                        <h3>Админка</h3>
                        <button className="admin-button"
                                onClick={handleLogout}>Выйти
                        </button>
                    </div>

                    <div className="admin-menu">
                        <button style={{
                            borderColor: menuItem === 'admin-schedule' ? 'rgb(54, 191, 90)' : 'white',
                            color: menuItem === 'admin-schedule' ? 'rgb(54, 191, 90)' : 'white'
                        }}
                                className="admin-menu-button" id="admin-schedule"
                                onClick={e => handleMenu(e.target.id)}>Расписание
                        </button>
                        <button style={{
                            borderColor: menuItem === 'admin-video' ? 'rgb(54, 191, 90)' : 'white',
                            color: menuItem === 'admin-video' ? 'rgb(54, 191, 90)' : 'white'
                        }}
                                className="admin-menu-button" id="admin-video"
                                onClick={e => handleMenu(e.target.id)}>Видео
                        </button>
                        <button style={{
                            borderColor: menuItem === 'admin-photo' ? 'rgb(54, 191, 90)' : 'white',
                            color: menuItem === 'admin-photo' ? 'rgb(54, 191, 90)' : 'white'
                        }}
                                className="admin-menu-button" id="admin-photo"
                                onClick={e => handleMenu(e.target.id)}>Фото
                        </button>
                        <button style={{
                            borderColor: menuItem === 'admin-bio' ? 'rgb(54, 191, 90)' : 'white',
                            color: menuItem === 'admin-bio' ? 'rgb(54, 191, 90)' : 'white'
                        }}
                                className="admin-menu-button" id="admin-bio"
                                onClick={e => handleMenu(e.target.id)}>Биография
                        </button>
                        <button
                            style={{
                                borderColor: menuItem === 'admin-contacts' ? 'rgb(54, 191, 90)' : 'white',
                                color: menuItem === 'admin-contacts' ? 'rgb(54, 191, 90)' : 'white'
                            }}
                            className="admin-menu-button" id="admin-contacts"
                            onClick={e => handleMenu(e.target.id)}>Контакты
                        </button>
                        <Flags />
                    </div>
                    <div className="admin-content">
                        {
                            renderContent(menuItem)
                        }
                    </div>
                </div>
                    ): (<Login/>)}
            </div>
        {error && (<div className="error">{error}</div>)}
        <div className={'modal-message-container'}>
            {adminError && (<AdminMessage message={adminError} isError={true} action={clearAdminError} />)}
            {message && (<AdminMessage message={message} isError={false} action={clearAdminMessage} />)}
        </div>

    </>);
};

export default AdminPanel;