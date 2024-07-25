import { ComponentPropsWithoutRef, type FC } from "react";

type ButtonProps = {
    el: 'button'
} & ComponentPropsWithoutRef<'button'> & {
    href?: never
};

type AnchorProps = {
    el: 'link'
} & ComponentPropsWithoutRef<'a'> & {
    href?: string
};

type ButtonCompProps = ButtonProps | AnchorProps;

const isAnchorProps = (props: ButtonCompProps): props is AnchorProps  => {
    return 'href' in props;
}

const Button: FC<ButtonCompProps> = (props) => {
    if (isAnchorProps(props)) {
        return <a {...props}></a>
    }

    return (
        <button {...props}></button>
    );
};

export default Button;