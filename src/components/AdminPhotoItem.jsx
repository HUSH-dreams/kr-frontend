import React, {useState} from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from '@mui/icons-material/Save';
import {
    clearAdminError,
    clearAdminMessage,
    imageDelete,
    imageEdit,
    setAdminError
} from "../store/content/actions";
import {useDispatch} from "react-redux";

const AdminPhotoItem = ({pic, token}) => {
    const dispatch = useDispatch();
    const [descRu, setDescRu] = useState(pic.description_ru);
    const [descEng, setDescEng] = useState(pic.description_eng);

    const handleDelete = () => {
        dispatch(imageDelete(pic.id, token));
    }

    const handleEdit = () => {
        if (descRu && descEng && (descRu !== pic.description_ru || descEng !== pic.description_eng)) {
            dispatch(clearAdminMessage());

            setTimeout(() => {
                dispatch(imageEdit({
                    id: pic.id,
                    descriptionRu: descRu,
                    descriptionEng: descEng
                }, token));
            },100);
        } else {
            dispatch(clearAdminError());

            setTimeout(() => {
                dispatch(setAdminError('Заполни оба поля, Кирилл'));
            },100);
        }
    }

    return (
        <div className="admin-pic-container">
            <div className="admin-pic">
                <img
                    src={`${process.env.REACT_APP_BACKEND_URL}/image/${pic.name}`}
                    alt={pic.name}
                    loading="lazy" />
            </div>
            <div className="admin-icons admin-pic-name">
                {pic.name}
            </div>
            <input className="admin-input" type="text" value={descRu} placeholder="Описание фото (RU)"
                   onChange={e => setDescRu(e.target.value)} />
            <input className="admin-input" type="text" value={descEng} placeholder="Описание фото (ENG)"
                   onChange={e => setDescEng(e.target.value)} />
            <div className="admin-icons">
                <div onClick={handleEdit}>
                    <SaveIcon />
                </div>
                <div onClick={handleDelete}>
                    <DeleteIcon/>
                </div>
            </div>
        </div>
    );
};

export default AdminPhotoItem;