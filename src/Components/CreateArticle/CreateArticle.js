import React, {useState, useRef} from 'react';

import { useDispatch } from 'react-redux';
import './CreateArticle.scss';
export default function CreateArticle() {
    const inputsRef=useRef([])
    const addRefs= el=>{
        if(el && !inputsRef.current.includes(el)){
            inputsRef.current.push(el);
        }
    };

    const dispatch=useDispatch();
    const handleForm=e=>{
        e.preventDefault();

        const newArticle={
            title: inputsRef.current[0].value,
            body: inputsRef.current[1].value,
        }

        dispatch({
            type:'ADDARTICLE',
            payload:newArticle
        });

        e.target.reset();
    }

    return(
        <div className="containerCreate">
           <h1>Ecrivez un article</h1>
           <form onSubmit={handleForm} className="container-form">
                <label>Titre</label>
                <input className="inp-title" ref={addRefs} type="text" placeholder="Entrez votre nom"/>
                <label>Votre article</label>
                <textarea className="inp-body" ref={addRefs} name="" cols="30" rows="10" placeholder="Votre article"></textarea>
                <input type="submit" value="Envoyer"/>
           </form>
        </div>
    );
}