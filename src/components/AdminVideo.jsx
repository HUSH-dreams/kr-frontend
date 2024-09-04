import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAdminError, selectAdminMessage, selectAdminVideos} from "../store/content/selectors";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    clearAdminError,
    clearAdminMessage,
    setAdminError,
    setAdminMessage,
    uploadVideo,
    videoDelete
} from "../store/content/actions";
import Message from "./Message";

const AdminVideo = ({token}) => {
    const dispatch = useDispatch();
    const videos = useSelector(selectAdminVideos);
    const [link, setLink] = useState('');
    const [descRu, setDescRu] = useState('');
    const [descEng, setDescEng] = useState('');

    const handleDelete = (id) => {
        dispatch(videoDelete(id, token));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (link && descRu && descEng) {
            dispatch(clearAdminMessage());

            setTimeout(() => {
                dispatch(uploadVideo({
                    link: link,
                    descriptionRu: descRu,
                    descriptionEng: descEng
                }, token))
            },100);
        } else {
            dispatch(clearAdminError());

            setTimeout(() => {
                dispatch(setAdminError('Заполни поля, Кирилл'));
            },100);
        }
    }

    return (
        <>
            <div className="admin-content-container">
                <div className="pictures-container">
                    <div className="pictures-header">
                        <span style={{width: 300}}>Ссылка</span>
                        <span style={{width: 300}}>Описание (RU)</span>
                        <span style={{width: 300}}>Описание (ENG)</span>
                        <span style={{width: 300}}>Действие</span>
                    </div>
                    {
                        videos?.map(video =>(
                            <div className="admin-pic-container">
                                <div style={{width: 300}}>{video.link}</div>
                                <div style={{width: 300}}>{video.description_ru}</div>
                                <div style={{width: 300}}>{video.description_eng}</div>
                                <div style={{width: 300}} className="admin-icons">
                                    <div onClick={() => handleDelete(video.id)}>
                                        <DeleteIcon/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="admin-video-add">
                    <form action="" onSubmit={e => handleSubmit(e)}>
                        <input type="text" value={link} placeholder="Ссылка"
                               onChange={e => setLink(e.target.value)} />
                        <input type="text" value={descRu} placeholder="Описание видео (RU)"
                               onChange={e => setDescRu(e.target.value)} />
                        <input type="text" value={descEng} placeholder="Описание видео (ENG)"
                               onChange={e => setDescEng(e.target.value)} />
                        <button className="admin-button" type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdminVideo;