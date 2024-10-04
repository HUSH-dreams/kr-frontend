import React, {useEffect, useState} from 'react';
import {
    clearAdminError, clearAdminMessage,
    imagesUploadError,
    setAdminError,
    uploadSchedule
} from "../store/content/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectAdminSchedule} from "../store/content/selectors";
import AdminScheduleItem from "./AdminScheduleItem";

const AdminSchedule = ({token, lang}) => {
    const dispatch = useDispatch();
    const [link, setLink] = useState('');
    const [descRu, setDescRu] = useState('');
    const [descEng, setDescEng] = useState('');
    const [nameRu, setNameRu] = useState('');
    const [nameEng, setNameEng] = useState('');
    const [placeRu, setPlaceRu] = useState('');
    const [placeEng, setPlaceEng] = useState('');
    const [time, setTime] = useState('');
    const [yandex, setYandex] = useState('');
    const schedules = useSelector(selectAdminSchedule);
    const [length, setLength] = useState(0);

    schedules.sort((a,b) => b.id - a.id);

    function fileValidation() {
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        const fileInput = document.getElementById('file_input');
        let fileInput_length = fileInput.files.length;

        if (fileInput_length > 0) {
            for (let i = 0; i < fileInput_length; i++) {
                if (!allowedExtensions.exec(fileInput.files[i].name)) {
                    dispatch(clearAdminError());

                    setTimeout(() => {
                        dispatch(imagesUploadError('Допустимые расширения файлов: .jpeg .jpg .png .gif'));
                    },100);

                    fileInput.value = '';

                    return false;
                }
            }
            setLength(fileInput_length);
        } else {
            setLength(0);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!descRu || !nameRu || !placeRu || !time) {
            dispatch(clearAdminError());

            setTimeout(() => {
                dispatch(setAdminError('Заполни поля, Кирилл'));
            },100);

            return;
        }

        const fileInput = document.getElementById('file_input');
        let fileInput_length = fileInput.files.length;

        const formData = new FormData();
        if (fileInput_length > 0) {
            for (let i = 0; i < fileInput_length; i++) {
                formData.append("files[]", fileInput.files[i]);
            }
        }

        dispatch(clearAdminMessage());

        setTimeout(() => {
            dispatch(uploadSchedule({
                link: link,
                nameRu: nameRu,
                nameEng: nameEng,
                placeRu: placeRu,
                placeEng: placeEng,
                time: time,
                descriptionRu: descRu,
                descriptionEng: descEng,
                yandex: yandex
            }, formData, token));
        },100);

        fileInput.value = '';
    }

    return (
        <>
            <div className="admin-content-container schedule-content-container">
                <div className="pictures-container schedule-container">
                    <div className="pictures-header">
                        <span style={{width: '100%'}}>ID</span>
                        <span style={{width: '100%'}}>Фото</span>
                        <span style={{width: '100%'}}>{lang ? 'Название(ENG)' : 'Название(RU)'}</span>
                        <span style={{width: '100%'}}>{lang ? 'Описание(ENG)' : 'Описание(RU)'}</span>
                        <span style={{width: '100%'}}>{lang ? 'Место(ENG)' : 'Место(RU)'}</span>
                        <span style={{width: '100%'}}>Время</span>
                        <span style={{width: '100%'}}>Карты</span>
                        <span style={{width: '100%'}}>Билеты</span>
                        <span style={{width: '100%'}}>Действие</span>
                    </div>
                    {
                        schedules?.map(schedule => (
                            <AdminScheduleItem lang={lang} schedule={schedule} token={token}/>
                        ))
                    }
                </div>
                <div className="admin-video-add schedule-add">
                    <form className="schedule-form" action="" onSubmit={e => handleSubmit(e)}>
                        <label className="custom-file-upload">
                            <input type="file" className="form-control" id="file_input"
                                   onChange={fileValidation}/>
                            {length > 0 ? 'Фото выбрано' : 'Выбрать фото'}
                        </label>
                        <input type="text" value={nameRu} placeholder="Название события (RU)"
                               onChange={e => setNameRu(e.target.value)}/>
                        <input type="text" value={nameEng} placeholder="Название события (ENG)"
                               onChange={e => setNameEng(e.target.value)}/>
                        <input type="text" value={placeRu} placeholder="Где (RU)"
                               onChange={e => setPlaceRu(e.target.value)}/>
                        <input type="text" value={placeEng} placeholder="Где (ENG)"
                               onChange={e => setPlaceEng(e.target.value)}/>
                        <input type="text" value={time} placeholder="Когда(dd.mm.yyyy hh:mm)"
                               onChange={e => setTime(e.target.value)}/>
                        <input type="text" value={yandex} placeholder="Яндекс карты"
                               onChange={e => setYandex(e.target.value)}/>
                        <input type="text" value={link} placeholder="Ссылка на билет"
                               onChange={e => setLink(e.target.value)}/>
                        <textarea value={descRu} placeholder="Описание события (RU)"
                                  onChange={e => setDescRu(e.target.value)}/>
                        <textarea value={descEng} placeholder="Описание события (ENG)"
                                  onChange={e => setDescEng(e.target.value)}/>
                        <button className="admin-button" type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdminSchedule;