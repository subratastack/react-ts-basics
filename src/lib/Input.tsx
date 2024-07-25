import { type ForwardedRef, forwardRef, type ComponentPropsWithoutRef, type FC } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>;

/* const Input: FC<InputProps> = ({id, label, ...props}) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </p>
    );
}; */

const Input = forwardRef<HTMLInputElement, InputProps>((
    {id, label, ...props},
    ref
) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} ref={ref} />
        </p>
    );
});

export default Input;