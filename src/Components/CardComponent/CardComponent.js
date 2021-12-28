import React from 'react';
import './CardComponent.scss';
export default function CardComponent(props) {
    return(
     <div className='card'>
         {props.children}
     </div>
    );
}
