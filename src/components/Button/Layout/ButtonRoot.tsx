'use client';

import React, { FC, ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    Type: "button" | "submit" | "reset";
    OnClick?: (e: any) => void;
}

const ButtonRoot:FC<ButtonProps> = ({Type, OnClick, children}) => {
    return(
        <button className='button' type={Type} onClick={OnClick}>
            {children}
        </button>
    );
}

export default ButtonRoot;