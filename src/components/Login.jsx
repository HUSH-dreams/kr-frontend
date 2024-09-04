import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoginError} from '../store/user/selectors';
import {loginError, loginInitiate} from '../store/user/actions';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector(selectLoginError);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            dispatch(loginInitiate(email, password));
        }
    };

    const handleStart = () => {
        dispatch(loginError(null));
    }

    return (
        <div className="admin-container admin-login">
            <h3 style={{display: 'flex', justifyContent: 'space-around'}}>Вход</h3>
            <div className="admin-video-add">
                <form action="" onSubmit={handleSubmit}>
                    <input className="admin-input" type="email" placeholder="Почта" value={email} name="email"
                           onClick={handleStart}
                           onChange={e => setEmail(e.target.value)}/>
                    <input className="admin-input" type="password" placeholder="Пароль" value={password} name="password"
                           onClick={() => setPassword('')}
                           onChange={e => setPassword(e.target.value)}/>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <button className="admin-button" type="submit" >Войти</button>
                    </div>
                </form>
            </div>
            { error && (
                <p style={{color: 'white'}}>{error}</p>
            )}
        </div>
    );
};

export default Login;