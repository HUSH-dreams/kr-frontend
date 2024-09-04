import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

const AdminMessage = ({message, isError, action}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(action());
        }, 10000);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [])

    return (<div className={isError ? 'modal-message modal-message-error' : 'modal-message'}>
        {message}
    </div>);
};

export default AdminMessage;