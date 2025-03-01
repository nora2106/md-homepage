import styles from "./textblock.module.scss";
import {useEffect, useRef} from "react";

export const TextBlock = (props) => {
    const textRef = useRef(null);

    useEffect(() => {
        console.log(props.text)
        props.text.forEach((text) => {
            //list
            if(text.listItem) {
                let listElement = document.createElement('ul');
                listElement.classList.add(styles['list']);
                textRef.current.appendChild(listElement);
                text.children.forEach(span => {
                    appendText( span, listElement, 'li');
                })
            }
            //paragraph
            else if(text.style === 'normal') {
                let paragraph = document.createElement("p");
                paragraph.classList.add(styles['paragraph']);
                textRef.current.appendChild(paragraph);
                text.children.forEach(span => {
                        appendText(span, paragraph, 'span');
                })
            }
            //headline
            else if(text.style) {
                let headline = document.createElement(text.style);
                headline.classList.add(styles['headline']);
                textRef.current.appendChild(headline);
                text.children.forEach(span => {
                    appendText(span, headline, 'span');
                })
            }
        })
    }, [props]);

    //append text to parent element and add styles
    function appendText(text, parent, elemType) {
        const newSpan = document.createElement(elemType);
        newSpan.textContent = text.text;
        if(text.marks.length > 0) {
            text.marks.forEach(mark => {
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