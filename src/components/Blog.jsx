import React from 'react';
import Button from "./Button";
import {useParams} from "react-router-dom";
import Article from "./Article";

const Blog = () => {
    const {string} = useParams();

    return (
        <div style={{padding: 10, border: '1px solid black', borderRadius: 7, backgroundColor: 'lightgrey', margin: '10px auto'}}>
            {
                !string ? (<Article />) : (<div>
                    Здесь список статей Керила Русинова о том, как достичь успешного успеха, и как правильно использовать свои
                    острые скулы в быту так, чтобы не причинить вреда окружающим
                    <Button to={'/blog/luchshiy-chelovek-v-mire'}>И тут статья такая</Button>
                </div>)
            }
        </div>
    );
};

export default Blog;