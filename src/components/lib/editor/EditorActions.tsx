import Button from 'components/lib/button/Button';
import Dropdown from 'components/lib/dropdown/Dropdown';
import { ReactComponent as CheckMark } from 'components/lib/icons/checkMark.svg';
import { ReactComponent as Copy } from "components/lib/icons/editor/copy.svg";
import { ReactComponent as Trash } from "components/lib/icons/editor/trash.svg";

import type { Editor } from "@tiptap/react/dist/packages/react/src/Editor";

import c from "./styles/Editor.module.scss";
import Reader from 'services/Reader';
import { useRef } from 'react';







const EditorActions = ({ editor }: { editor: Editor; }) => {

    const copyToClipboard = async (str: string) => {
        await navigator.clipboard.writeText(str);
    };

    const selectRef = useRef<HTMLSelectElement>(null);


    return (
        <div className={c.editor_actions}>
            <div className={c.editor_actions_container}>

                <Button
                    padding={[4, 10, 4, 13]}
                    theme='blue'
                    StartIcon={<CheckMark />}
                    onClick={() => {
                        const editorText = editor.getText();
                        const reader = new Reader();
                        reader.setText(editorText);
                        reader.onresult((result) => {
                            console.log(result);
                        });
                        reader.start();

                    }}
                >
                    <p className="f-size-p7 f-weight-400">
                        Check
                    </p>
                </Button>

                <div className={c.button_container}>
                    <Button
                        padding={[5, 7, 5, 13]}
                        theme='gray'
                        onClick={() => {
                            const editorText = editor.getText();
                            copyToClipboard(editorText);
                        }}
                        StartIcon={<Copy />}>
                        <p className="f-size-p7 f-weight-400">
                            Copy
                        </p>
                    </Button>
                    <Button
                        padding={[5, 7, 5, 13]}
                        theme='gray'
                        onClick={() => {
                            editor.commands.setContent('');
                        }}
                        StartIcon={<Trash />}>
                        <p className="f-size-p7 f-weight-400">
                            Delete
                        </p>
                    </Button>

                    <div
                        style={{ transform: 'translate(0px, 70%)' }}
                        className={c.toolbar_seperator} />

                    <Dropdown />


                </div>
            </div>
        </div>
    );
};

export default EditorActions;