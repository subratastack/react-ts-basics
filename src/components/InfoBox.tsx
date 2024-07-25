import { type ReactNode, type FC } from "react";

type InfoBoxProps = {
    mode: 'info';
    children: ReactNode;
};

type WarningBoxProp = {
    mode: 'warning';
    children: ReactNode;
    severity: 'low' | 'medium' | 'high';
};

type InfoBoxCompProps = InfoBoxProps | WarningBoxProp;

const InfoBox: FC<InfoBoxCompProps> = (props) => {

    const {mode, children} = props;

    if (mode ==='info') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        );
    }

    const {severity} = props;

    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
};

export default InfoBox;