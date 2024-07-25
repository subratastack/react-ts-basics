import { type ReactNode, type ElementType, type FC, ComponentPropsWithoutRef } from "react";

type ContainerProps<T extends ElementType> = {
    as: T;
    children: ReactNode
} & ComponentPropsWithoutRef<T>;

const Container: FC<ContainerProps<ElementType>> = ({as, children, ...props}) => {
    const Component = as;

    return <Component {...props}>
        {children}
    </Component>
};

export default Container;