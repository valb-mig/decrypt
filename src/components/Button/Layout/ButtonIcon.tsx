import React, { FC, ReactNode } from 'react';

import '@/components/Button/Style/button.css';

interface InputProps {
    Icon: ReactNode;
}

const ButtonIcon:FC<InputProps> = ({Icon}) => {
    return(
        <div className='button-icon'>
            {Icon}
        </div>
    );
}

export default ButtonIcon;