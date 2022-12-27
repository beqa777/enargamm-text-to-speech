import type { Editor } from "@tiptap/react/dist/packages/react/src/Editor";


import { ReactComponent as Bold } from "components/lib/icons/editor/bold.svg";
import { ReactComponent as BulletList } from "components/lib/icons/editor/bullet_list.svg";
import { ReactComponent as Heading1 } from "components/lib/icons/editor/heading_1.svg";
import { ReactComponent as Heading2 } from "components/lib/icons/editor/heading_2.svg";
import { ReactComponent as Italic } from "components/lib/icons/editor/italic.svg";
import { ReactComponent as Link } from "components/lib/icons/editor/link.svg";
import { ReactComponent as OrderedList } from "components/lib/icons/editor/ordered_list.svg";
import { ReactComponent as RemoveFormat } from "components/lib/icons/editor/remove_format.svg";
import { ReactComponent as Underline } from "components/lib/icons/editor/underline.svg";
import { useCallback } from "react";



import c from "./styles/Editor.module.scss";


const EditorMenuBar = ({ editor }: { editor: Editor; }) => {
    if (!editor) {
        return null;
    }


    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);

        // cancelled
        if (url === null) {
            return;
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink()
                .run();

            return;
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run();
    }, [editor]);

    return (
        <>
            <div className={c.editor_toolbar}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    className={editor.isActive('bold') ? 'is-active' : ''}>
                    <Bold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={editor.isActive('italic') ? 'is-active' : ''}>
                    <Italic />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleUnderline()
                            .run()
                    }
                    className={editor.isActive('strike') ? 'is-active' : ''}>
                    <Underline />
                </button>

                <div className={c.toolbar_seperator} />

                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}>
                    <BulletList />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}>
                    <OrderedList />
                </button>

                <div className={c.toolbar_seperator} />

                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
                    <Heading1 />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
                    <Heading2 />
                </button>

                <div className={c.toolbar_seperator} />

                <button
                    onClick={setLink}
                    className={editor.isActive('link') ? 'is-active' : ''}>
                    <Link />
                </button>

                <div className={c.toolbar_seperator} />

                <button
                    onClick={() => editor.commands.clearNodes()}>
                    <RemoveFormat />
                </button>
            </div>
        </>
    );
};


export default EditorMenuBar;