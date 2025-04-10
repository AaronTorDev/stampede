"use client"
import React, { useState } from 'react';
import PlaceHolder from './PlaceHolder';
import './CompAssets/field.css'
import NumberCard from './CardNumber';
import ComodinCard from './CardComodin';

function Field(){
    const [InfoState, setInfoState] = useState(true);

    const HandleInfoState = () => {
        if(InfoState){
            setInfoState(false);
        }else{
            setInfoState(true);
        }
    };

    return(

        <>
        <div className='HoleField'>
            
        <div className='SideInfoCard'>
            {InfoState ? <NumberCard/> : <ComodinCard/>}
            <button onClick={HandleInfoState}>Cambiar InfoCarta</button>
        </div>

        <div className='TopField'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        <div className='BottomField'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        <div className='LeftField'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        <div className='RightField'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>
        <div className='TopFieldTop'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        <div className='BottomFieldTop'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        <div className='LeftFieldTop'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        <div className='RightFieldTop'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        <div className='BottomFieldHand'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        <div className='TopFieldHand'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        <div className='LeftFieldHand'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        <div className='RightFieldHand'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        <div className='CenterField'>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
        </div>

        </div>
        </>
    );
};

export default Field;