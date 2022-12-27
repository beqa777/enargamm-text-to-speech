import Button from "components/lib/button/Button"
import { ReactComponent as ChromeIcon } from 'components/lib/icons/chrome.svg';
import { ReactComponent as CheckMark } from 'components/lib/icons/checkMark.svg';
import { ReactComponent as ArrowDown } from 'components/lib/icons/menu/arrow-down.svg';
import c from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <nav className={c.navigation_main}>
            <div className={c.container}>

                <div className={c.buttons_container}>
                    <Button
                        padding={[4, 11, 4, 14]}
                        theme='white'
                        StartIcon={<ChromeIcon />}>
                        <p className="f-size-p2 f-weight-400">
                            Add to Chrome
                        </p>
                    </Button>

                    <Button
                        padding={[4, 11, 4, 14]}
                        theme='blue'
                    >
                        <p className="f-size-p2 f-weight-400">
                            Upgrade to Pro
                        </p>
                    </Button>
                </div>
            </div>
            <div className={c.profile_container}>
                <div className={c.image}><img src={'navigation/avatar.png'} alt="" /></div>
                <div className={c.arrow}><ArrowDown /></div>
            </div>
        </nav>
    )
}

export default Navigation