import React, { FC, ReactNode } from 'react';

import '@/components/Input/Style/input.css';

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