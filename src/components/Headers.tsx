import React from 'react';
import ButtonHeaders from './ButtonHeader';
import '../css/header.css';
import SortHeaders from './SortHeaders';

const Headers =() =>{
    return <div className="header">
        <h4>Demo App</h4>
        <ButtonHeaders />
        <SortHeaders />
    </div>

    
}

export default Headers;