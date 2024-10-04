import React, {useState} from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import {clearAdminMessage, editSchedule, scheduleDelete} from "../store/content/actions";
import {useDispatch} from "react-redux";

const AdminScheduleItem = ({schedule, lang, token}) => {
    const dispatch = useDispatch();
    const [isEdit, setEdit] = useState(false);
    const [nameRu, setNameRu] = useState(schedule.name_ru ? schedule.name_ru : '');
    const [nameEng, setNameEng] = useState(schedule.name_eng ? schedule.name_eng : '');
    const [placeRu, setPlaceRu] = useState(schedule.place_ru ? schedule.place_ru : '');
    const [placeEng, setPlaceEng] = useState(schedule.place_eng ? schedule.place_eng : '');
    const [descriptionRu, setDescriptionRu] = useState(schedule.description_ru ? schedule.description_ru : '');
    const [descriptionEng, setDescriptionEng] = useState(schedule.description_eng ? schedule.description_eng : '');
    const [time, setTime] = useState(schedule.time ? schedule.time : '');
    const [yandex, setYandex] = useState(schedule.yandex ? schedule.yandex : '');
    const [link, setLink] = useState(schedule.link ? schedule.link : '');

    const handleDelete = (id) => {
        dispatch(clearAdminMessage());

        setTimeout(() => {
            dispatch(scheduleDelete(id, token));
        }, 100);
    }

    const handleSave = () => {
        setTimeout(() => {
            dispatch(editSchedule({
                link: link,
                nameRu: nameRu,
                nameEng: nameEng,
                placeRu: placeRu,
                placeEng: placeEng,
                time: time,
                descriptionRu: descriptionRu,
                descriptionEng: descriptionEng,
                yandex: yandex,
                file: schedule.file_name,
                id: schedule.id
            }, token));
        }, 100);

        setEdit(false);
    }

    return (<div className={isEdit ? "admin-pic-container admin-schedule-edit-container" : "admin-pic-container"}>
        <div style={{width: '100%'}}>{schedule.id}</div>
        <div style={{width: '100%'}}>
            <img
                src={`${process.env.REACT_APP_BACKEND_URL}/schedule/image/${schedule.file_name}`}
                alt="" height="50px"/>
        </div>
        {isEdit ? (<>
            {lang ? (<>
                <textarea placeholder="Название" style={{width: '100%'}} className="admin-schedule-edit" value={nameEng}
                          onChange={e => setNameEng(e.target.value)}/>
                <textarea placeholder="Описание" style={{width: '100%'}} className="admin-schedule-edit" value={descriptionEng}
                          onChange={e => setDescriptionEng(e.target.value)}/>
                <input placeholder="Место" style={{width: '100%'}} className="admin-schedule-edit" value={placeEng}
                       onChange={e => setPlaceEng(e.target.value)}/>
            </>) : (<>
                <textarea placeholder="Название" style={{width: '100%'}} className="admin-schedule-edit" value={nameRu}
                          onChange={e => setNameRu(e.target.value)}/>
                <textarea placeholder="Описание" style={{width: '100%'}} className="admin-schedule-edit" value={descriptionRu}
                          onChange={e => setDescriptionRu(e.target.value)}/>
                <input placeholder="Место" style={{width: '100%'}} className="admin-schedule-edit" value={placeRu}
                       onChange={e => setPlaceRu(e.target.value)}/>
            </>)}
            <input placeholder="Время" style={{width: '100%'}} className="admin-schedule-edit" value={time}
                   onChange={e => setTime(e.target.value)}/>
            <input placeholder="Карты" style={{width: '100%'}} className="admin-schedule-edit" value={yandex}
                   onChange={e => setYandex(e.target.value)}/>
            <input placeholder="Ссылка" style={{width: '100%'}} className="admin-schedule-edit" value={link}
                   onChange={e => setLink(e.target.value)}/>
        </>) : (<>
            {lang ? (<>
                <div style={{width: '100%'}}>{nameEng}</div>
                <div style={{width: '100%'}}>{descriptionEng}</div>
                <div style={{width: '100%'}}>{placeEng}</div>
            </>) : (<>
                <div style={{width: '100%'}}>{nameRu}</div>
                <div style={{width: '100%'}}>{descriptionRu}</div>
                <div style={{width: '100%'}}>{placeRu}</div>
            </>)}
            <div style={{width: '100%'}}>{time}</div>
            <div style={{width: '100%'}}>{yandex}</div>
            <div style={{width: '100%'}}>{link}</div>
        </>)}
        <div style={{width: '100%'}} className="admin-icons">
            {isEdit ? (<>
                <div onClick={handleSave}>
                    <SaveIcon/>
                </div>
                <div onClick={() => setEdit(false)}>
                    <CloseIcon/>
                </div>
            </>) : (<>
                <div onClick={() => setEdit(true)}>
                    <EditIcon/>
                </div>
                <div onClick={() => handleDelete(schedule.id)}>
                    <DeleteIcon/>
                </div>
            </>)}
        </div>
    </div>);
};

export default AdminScheduleItem;