import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    selectAdminError,
    selectAdminMessage,
    selectAdminPictures,
    selectUploadError,
    selectUploadInfo
} from "../store/content/selectors";
import {
    clearAdminError, clearAdminMessage,
    imagesUploadError,
    imagesUploadStart,
    setAdminError, socialsDelete,
    uploadInitiate
} from "../store/content/actions";
import AdminPhotoItem from "./AdminPhotoItem";
import Message from "./Message";

const AdminPhoto = ({token}) => {
    const dispatch = useDispatch();
    const pictures = useSelector(selectAdminPictures);
    const [length, setLength] = useState(0);

    function fileValidation(){
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        const fileInput = document.getElementById('file_input');
        let fileInput_length = fileInput.files.length;

        if (fileInput_length > 0) {
            for (let i = 0; i < fileInput_length; i++) {
                if(!allowedExtensions.exec(fileInput.files[i].name)){
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

    function UploadFiles(){
        const fileInput = document.getElementById('file_input');
        let fileInput_length = fileInput.files.length;

        const formData = new FormData();
        if (fileInput_length > 0) {
            for (let i = 0; i < fileInput_length; i++) {
                formData.append("files[]", fileInput.files[i]);
            }
        } else {
            dispatch(clearAdminError());

            setTimeout(() => {
                dispatch(setAdminError('Выбери фото, чемпион!'));
            },100);

            return;
        }
        dispatch(clearAdminMessage());

        setTimeout(() => {
            dispatch(uploadInitiate(formData, token));
        },100);
        //
        // setTimeout(() => {
        //     dispatch(imagesUploadStart());
        // }, 5000);

        fileInput.value = '';
    }

    return (
        <>
            <div className="admin-content-container">
                <div className="pictures-container">
                    <div className="pictures-header">
                        <span style={{width: 200}}>Фото</span>
                        <span style={{width: 200}}>Название</span>
                        <span style={{width: 200}}>Описание (RU)</span>
                        <span style={{width: 200}}>Описание (ENG)</span>
                        <span style={{width: 200}}>Действие</span>
                    </div>
                    {
                        pictures?.map(pic => (
                            <AdminPhotoItem pic={pic} token={token}/>
                        ))
                    }
                </div>
                <div className="wrapper">
                    <div className="form-group">
                        <label className="custom-file-upload">
                            <input type="file" className="form-control" id="file_input"
                                   onChange={fileValidation} multiple />
                            {
                                length ? `Выбрано фото: ${length}` : 'Выбрать фото'
                            }
                        </label>
                        <button id="uploadBtn" className="admin-button" onClick={UploadFiles}>Загрузить</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPhoto;