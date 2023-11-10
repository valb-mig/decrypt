import React, { FC, ReactNode } from 'react';

interface InputProps {
    Icon: ReactNode;
}

const InputIcon:FC<InputProps> = ({Icon}) => {
    return(
        <div className='input-icon'>
            {Icon}
        </div>
    );
}

export default InputIcon;