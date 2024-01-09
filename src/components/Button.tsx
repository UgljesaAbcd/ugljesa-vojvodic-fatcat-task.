import { ReactNode, MouseEvent, FC } from 'react';

import { clsx } from 'clsx';

interface ButtonProps {
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
