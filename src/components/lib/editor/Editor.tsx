import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link'

import "./styles/Editor.defaults.css";
import c from "./styles/Editor.module.scss";


import EditorMenuBar from './EditorToolbar';
import EditorActions from './EditorActions';



export default () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link.configure({
                openOnClick: false,
            }),
            Placeholder.configure({
                placeholder: 'Type or paste (⌘+V) something here.',
            }),
        ],
    });




    return (
        <div className={c.editor_main}>
            <div className={c.container}>
                <EditorActions editor={editor!} />
                <EditorContent className={c.editor} editor={editor} />
                <EditorMenuBar editor={editor!} />
            </div>
        </div>
    );
};