import { useDispatch } from 'react-redux';
import { getUsername } from '../store/slices/username.slice';
import '../styles/login.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText('Hello trainer!!! Give me your name to start.'.slice(0, text.length + 1))
        }, 50)

        return () => clearTimeout(timeout)
    }, [text]);

    const goPokemons = (e) => {
        if (name !== '') {
            dispatch(getUsername(name));
            navigate('/pokedex');
        } else {
            alert('Give me your name')
        }
    };

    return (
        <div className='loginBox'>
            <main>
                <div className='pokedex'>
                    <span className='loading2'></span>
                    <p> {text} </p>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoFocus
                    />
                    <div></div>
                    <button onClick={ goPokemons }><i className='bx bx-check'></i></button>
                </div>
            </main>
        </div>
    );
};

export default Login;
