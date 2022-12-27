import { ReactNode } from "react";
import c from "./styles/SideMenuLink.module.scss";


interface ISideMenuLink {
    url: string,
    icon: JSX.Element,
    active?: boolean,
    children: ReactNode | ReactNode[],
}


const SideMenuLink = ({ url, icon, active, children }: ISideMenuLink) => {
    return (
        <div className={c.side_menu_link_main + " " + `${active ? c.active : ' '}`}>
            <a href={url} className={c.container} >
                <div className={c.icon}>
                    {icon}
                </div>
                <div className={c.content}>
                    {children}
                </div>
            </a>
        </div>

    );
};

export default SideMenuLink;