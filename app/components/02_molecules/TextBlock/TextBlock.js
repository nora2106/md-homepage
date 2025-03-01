import styles from "./textblock.module.scss";
import {useEffect, useRef} from "react";

export const TextBlock = (props) => {
    const textRef = useRef(null);

    useEffect(() => {
        props.text.forEach((text) => {
            const markDefs = text.markDefs;
            //list
            if(text.listItem) {
                let listElement = document.createElement('ul');
                listElement.classList.add(styles['list']);
                textRef.current.appendChild(listElement);
                text.children.forEach(span => {
                    appendText( span, listElement, 'li', markDefs);
                })
            }
            //paragraph
            else if(text.style === 'normal') {
                let paragraph = document.createElement("p");
                paragraph.classList.add(styles['paragraph']);
                textRef.current.appendChild(paragraph);
                text.children.forEach(span => {
                        appendText(span, paragraph, 'span', markDefs);
                })
            }
            //headline
            else if(text.style) {
                let headline = document.createElement(text.style);
                headline.classList.add(styles['headline']);
                textRef.current.appendChild(headline);
                text.children.forEach(span => {
                    appendText(span, headline, 'span', markDefs);
                })
            }
        })
    }, [props]);

    //append text to parent element and add styles
    function appendText(text, parent, elemType, markDefs) {
        let newSpan = document.createElement(elemType);
        newSpan.textContent = text.text;
        if(text.marks.length > 0) {
            text.marks.forEach(mark => {
                if(markDefs.length > 0) {
                    markDefs.forEach(markDef => {
                        if(markDef._key === mark && markDef._type === 'link') {
                            newSpan.remove();
                            newSpan = document.createElement('a');
                            newSpan.textContent = text.text;
                            console.log(markDef.href)
                            newSpan.href = '//' + markDef.href;
                        }
                    })
                }
                if(styles[mark]) {
                    newSpan.classList.add(styles[mark]);
                }
            })
        }
        parent.appendChild(newSpan);
    }

    return (
        <div ref={textRef} className={styles.block}></div>
    );
};

export default TextBlock;