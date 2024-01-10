import { ReactNode, MouseEvent, FC } from 'react';

import { clsx } from 'clsx';

interface ButtonProps {
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    disabled?: true | false;
}

const Button: FC<ButtonProps> = ({
    children,
    onClick,
    className,
    type = 'submit',
    disabled,
}) => {
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
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
