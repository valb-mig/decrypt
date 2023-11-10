import React, { FC } from 'react';

interface InputProps {
    Title: string;
}

const InputTitle:FC<InputProps> = ({Title}) => {
    return(
        <div className='input-title'>
            {Title}
        </div>
    );
}

export default InputTitle;