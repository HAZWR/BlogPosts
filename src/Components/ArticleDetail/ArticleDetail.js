import React from 'react';
import './ArticleDetail.scss';
import { useLocation } from 'react-router-dom';
export default function ArticleDetail() {
    const location=useLocation();
    console.log(location);
    return(
        <div className='articleDetail'>
            <h2> Votre article : {location.state?.title}</h2>
            <p>{location.state?.body}</p>
        </div>
    );
}