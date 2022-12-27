import Button from 'components/lib/button/Button';
import c from './Dropdown.module.scss';
import { ReactComponent as Language } from "components/lib/icons/editor/language.svg";
import { Children, useRef, useState } from 'react';


const Dropdown = () => {

    const [value, setValue] = useState("Language");
    const myDropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        myDropdownRef?.current?.classList.toggle(c.show);
    }

    const select = (e: any) => {
        setValue(e.target.innerText);
        toggleDropdown();
    }

    return (
        <div className={c['dropdown-holder']}>
            <div className={c.dropdown}>
                <Button
                    padding={[5, 7, 5, 13]}
                    theme='drop'
                    onClick={toggleDropdown}
                    StartIcon={<Language />}>
                    <p className="f-size-p7 f-weight-400">
                        {value}
                    </p>
                </Button>

                <div className={c['dropdown-content']} ref={myDropdownRef}>
                    <p onClick={select}>English</p>
                    <p onClick={select}>Georgian</p>
                    <p onClick={select}>German</p>
                </div>

            </div>
        </div>
    )
}

export default Dropdown
