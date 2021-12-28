import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from '../../Components/CardComponent/CardComponent';
import { getArticles } from '../../Redux/Reducers/ArticleReducer';
import './HomeContainer.scss'; 
import {Link} from 'react-router-dom';

export default function HomeContainer() {
    const articles = useSelector(state=>{
        console.log(state);
        return state.articleReducer.articles;
    });
    const dispatch=useDispatch();
    useEffect(()=>{
        if(articles.length===0)
            dispatch(getArticles);
    },[]);
    return(
        <div className='container'>
            <h1>Tous les articles</h1>
            <div className='homeContainer'>
                {console.log(articles)}
                {articles.map(item=>{
                    return(
                        <CardComponent key={item.id}>
                            <h2>{item.title}</h2>
                            <Link to={{
                                pathname:`articles/${item.title}`}}
                                state={{
                                    title: item.title,
                                    body: item.body,
                                }}
                            >Lire l'article</Link>
                        </CardComponent>
                    )
                })} 
            </div>
        </div>
    );
}