import React from 'react'
import "./style.css"

type Props = {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
    return (
        <button className='common-btn' onClick={onClick}>
            {children}
        </button>
    )
}

export default Button