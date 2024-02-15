"use client"

import React, { useEffect, useRef } from 'react';

const BlobComponent = () => {
    const cursorRef = useRef(null)
    useEffect(() => {
    if (cursorRef.current == null || cursorRef == null)
         return;
    document.addEventListener('mousemove', e => {
        if (cursorRef.current == null)
            return;
        (cursorRef.current as HTMLElement).setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
    })
    document.addEventListener('click', () => {
        if (cursorRef.current == null)
            return;
        (cursorRef.current as HTMLElement).classList.add("expand");
        setTimeout(() => {
            if (cursorRef.current == null)
                return;
            (cursorRef.current as HTMLElement).classList.remove("expand");
        }, 500)
    })
    }, [])
    return (
        <>
            <div className='blob' ref={cursorRef}>
    </div>
    <div className="blur"></div>
        </>

    )    
};

export default BlobComponent;
