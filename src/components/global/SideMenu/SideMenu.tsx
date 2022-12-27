import { ReactComponent as SpellCheckMark } from "components/lib/icons/sidemenu/spellCheckMark.svg";
import { ReactComponent as AudioWave } from "components/lib/icons/sidemenu/audioWave.svg";
import { ReactComponent as Webcam } from "components/lib/icons/sidemenu/webcam.svg";
import { ReactComponent as Settings } from "components/lib/icons/sidemenu/settings.svg";
import { ReactComponent as Facebook } from "components/lib/icons/sidemenu/facebook.svg";
import { ReactComponent as Questions } from "components/lib/icons/sidemenu/questions.svg";

import SideMenuLink from './SideMenuLink';
import c from "./styles/SideMenu.module.scss";
import ThemeToggle from "components/lib/toggle/ThemeToggle";



const mainMenuItems = [
    {
        url: "/spellChecker",
        icon: <SpellCheckMark />,
        text: "Spellchecker",
        active: true,
    },
    {
        url: "/text_to_speech",
        icon: <AudioWave />,
        text: 'Text to Speech',
        active: false,
    },
    {
        url: "/speech_to_text",
        icon: <Webcam />,
        text: 'Speech to Text',
        active: false,
    },
];

const miscMenuItems = [
    {
        url: "/settings",
        icon: <Settings />,
        text: "Settings",

    },
    {
        url: "/facebook",
        icon: <Facebook />,
        text: 'Facebook',
    },
    {
        url: "/questions",
        icon: <Questions />,
        text: 'Contact support',
    },
];



const SideMenu = () => {


    return (
        <aside className={c.side_menu_main}>
            <div className={c.container}>

                <div className={c.links}>
                    <div className={c.link}>
                        {mainMenuItems.map(({ url, icon, text, active }) => {

                            return <SideMenuLink
                                key={text}
                                url={url}
                                active={
                                    window.location.pathname != '/' ? (window.location.pathname == url)
                                        : (url == '/spellChecker') ? true : false
                                }
                                icon={icon}>
                                <p className="f-size-p8 f-weight-300">
                                    {text}
                                </p>
                            </SideMenuLink>
                        }
                        )}
                    </div>
                </div>

                <div className={c.miscellaneous_links}>
                    <div className={c.link}>
                        {miscMenuItems.map(({ url, icon, text }) => (
                            <SideMenuLink
                                key={text}
                                url={url}
                                icon={icon}>
                                <p className="f-size-p8 f-weight-300">
                                    {text}
                                </p>
                            </SideMenuLink>
                        ))}
                    </div>
                </div>

                <div className={c.theme_toggle}>
                    <ThemeToggle theme="light" />
                </div>
            </div>
        </aside>
    );
};

export default SideMenu;