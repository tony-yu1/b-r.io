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
        (cursorRef.current as HTMLElement).setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;");
    })
    }, [])
    return (
        <>
            <div className='blob blur-[150px] duration-1500	ease-in-out' ref={cursorRef}>
    </div>
        </>

    )    
};

export default BlobComponent;
