import { FC, ChangeEvent, FocusEvent } from 'react';

import { clsx } from 'clsx';

interface TextFieldProps {
    name: string;
    label: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    value: string;
    isTouched: boolean | undefined;
    errorMessage: string | undefined;
}

const TextField: FC<TextFieldProps> = ({
    name,
    label,
    onChange = () => {},
    onBlur = () => {},
    value,
    isTouched,
    errorMessage,
}) => {
    return (
        <div className={clsx('m-5')}>
            <label
                htmlFor={name}
                className={clsx(
                    'block',
                    'text-mainGreen',
                    'text-sm',
                    'font-bold',
                    'mb-2'
                )}
            >
                {label}
            </label>
            <input
                type="text"
                id={name}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={clsx(
                    'shadow',
                    'appearance-none',
                    'border',
                    'rounded',
                    'w-full',
                    'py-2',
                    'px-3',
                    'text-gray-700',
                    'leading-tight',
                    'focus:outline-none',
                    'focus:shadow-outline',
                    isTouched && errorMessage && 'border-red'
                )}
            />
            {isTouched && errorMessage && (
                <div className={clsx('text-red', 'text-xs', 'italic')}>
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default TextField;
