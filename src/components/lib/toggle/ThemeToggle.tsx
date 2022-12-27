import { useCookies } from "react-cookie";


import { ReactComponent as ThemeToggler } from "components/lib/icons/components/theme_toggler.svg";
import { useEffect, useState } from "react";

import c from "./styles/ThemeToggle.module.scss";


interface IThemeToggle {
    theme?: 'dark' | 'light';
}



const ThemeToggle = ({ theme = 'light' }: IThemeToggle) => {
    const [currentTheme, setCurrentTheme] = useState(theme);
    const [cookies, setCookie, removeCookie] = useCookies(['user_theme']);

    const changeTheme = () => {
        const toggledTheme = currentTheme === 'light' ? 'dark' : 'light';
        setCurrentTheme(toggledTheme);
        setCookie("user_theme", toggledTheme);
    };


    useEffect(() => {
        setCurrentTheme(cookies.user_theme);
        
        return () => {
            removeCookie("user_theme");
        };
    }, []);



    return (
        <div
            className={c.theme_toggle_main}
            onClick={() => changeTheme()}>
            <div className={c.container}>
                <ThemeToggler
                    className={`${c.theme_toggle_icon} ${c[currentTheme]}`}
                />
            </div>
        </div>
    );
};

export default ThemeToggle;