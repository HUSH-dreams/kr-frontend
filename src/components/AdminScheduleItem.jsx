import React, {useEffect, useState} from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from '@mui/icons-material/Save';
import {clearAdminMessage, scheduleDelete} from "../store/content/actions";
import {useDispatch} from "react-redux";

const AdminScheduleItem = ({schedule, lang, token}) => {
    const dispatch = useDispatch();
    const [isEdit, setEdit] = useState(false);
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [time, setTime] = useState(schedule.time ? schedule.time : '');
    const [description, setDescription] = useState('');
    const [yandex, setYandex] = useState(schedule.yandex ? schedule.yandex : '');
    const [link, setLink] = useState(schedule.link ? schedule.link : '');

    useEffect(() => {
        setName(lang ? schedule.name_eng : schedule.name_ru);
        setPlace(lang ? schedule.place_eng : schedule.place_ru);
        setDescription(lang ? schedule.description_eng : schedule.description_ru);
    }, [lang])


    const handleDelete = (id) => {
        dispatch(clearAdminMessage());

        setTimeout(() => {
            dispatch(scheduleDelete(id, token));
        },100);
    }

    const handleSave = () => {
        setEdit(false);
    }

    return (
        <div className="admin-pic-container">
            <div style={{width: '100%'}}>
                <img
                    src={`${process.env.REACT_APP_BACKEND_URL}/schedule/image/${schedule.file_name}`}
                    alt="" height="50px"/>
            </div>
            {
                isEdit ? (<>
                    <textarea style={{width: '100%'}} className="admin-schedule-edit" value={name}
                           onChange={e => setName(e.target.value)}/>
                    <input style={{width: '100%'}} className="admin-schedule-edit" value={place}
                           onChange={e => setPlace(e.target.value)}/>
                    <input style={{width: '100%'}} className="admin-schedule-edit" value={time}
                           onChange={e => setTime(e.target.value)}/>
                    <textarea style={{width: '100%'}} className="admin-schedule-edit" value={description}
                           onChange={e => setDescription(e.target.value)}/>
                    <input style={{width: '100%'}} className="admin-schedule-edit" value={yandex}
                           onChange={e => setYandex(e.target.value)}/>
                    <input style={{width: '100%'}} className="admin-schedule-edit" value={link}
                           onChange={e => setLink(e.target.value)}/>
                </>) : (<>
                    <div style={{width: '100%'}}>{name}</div>
                    <div style={{width: '100%'}}>{place}</div>
                    <div style={{width: '100%'}}>{time}</div>
                    <div style={{width: '100%'}}>{description}</div>
                    <div style={{width: '100%'}}>{yandex}</div>
                    <div style={{width: '100%'}}>{link}</div>
                </>)
            }
            <div style={{width: '100%'}} className="admin-icons">
                {
                    isEdit ? (<div onClick={handleSave}>
                        <SaveIcon/>
                    </div>) : (<div onClick={() => setEdit(true)}>
                        <EditIcon/>
                    </div>)
                }

                <div onClick={() => handleDelete(schedule.id)}>
                    <DeleteIcon/>
                </div>
            </div>
        </div>
    );
};

export default AdminScheduleItem;