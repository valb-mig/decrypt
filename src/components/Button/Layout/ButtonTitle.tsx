import React, { FC } from 'react';

interface ButtonProps {
    Title: string;
}

const ButtonTitle:FC<ButtonProps> = ({Title}) => {
    return(
        <div className='button-title'>
            <p>{Title}</p>
        </div>
    );
}

export default ButtonTitle;