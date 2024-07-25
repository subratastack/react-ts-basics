import React, { forwardRef, useRef, useImperativeHandle, FormEventHandler, FormEvent } from "react";

type FormProps = React.ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

export type FormHandle = {
    clear: () => void; 
};

const Form = forwardRef<FormHandle, FormProps>((props, ref) => {
    const { onSave, children, ...otherProps } = props;
    const formRef = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => ({
        clear() {
            if (formRef.current) {
                console.log("CLEARING");
                formRef.current.reset();
            }
        }
    }));

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);

        /* if (formRef.current) {
            formRef.current.reset();
        } */
    };

    return (
        <form {...otherProps} onSubmit={handleSubmit} ref={formRef}>
            {children}
        </form>
    );
});

export default Form;
