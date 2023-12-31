import React, { FC, ReactNode } from 'react';

import '@/components/Input/Style/input.css';

interface InputProps {
    children: ReactNode;
    Type: "textarea" | "text" | "password";
    Value: string;
    OnChange: (e: any) => void;
    Disbled?: boolean;
    Placeholder?: string;
}

const InputRoot:FC<InputProps> = ({Type, Value, OnChange, Disbled, Placeholder, children}) => {
    return(
        <div className='input'>
            <div className='input-header'>
            {children}
            </div>
            { Type == "textarea" ? (
                <textarea 
                    rows={4}
                    cols={50} 
                    value={Value} 
                    onChange={OnChange}
                    disabled={Disbled}
                    placeholder={Placeholder}
                />
            ):(
                <input 
                    type={Type} 
                    value={Value} 
                    onChange={OnChange}
                    disabled={Disbled}
                    placeholder={Placeholder}
                />
            )}
        </div>
    );
}

export default InputRoot;