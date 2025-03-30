"use client"
import styles from "./textblock.module.scss";
import {useEffect, useRef, useState} from "react";
import {motion} from "motion/react";
import {usePathname} from "next/navigation";

export const TextBlock = (props) => {
    const textRef = useRef(null);

    useEffect(() => {
        //fill text block only if empty
        if(textRef.current.childElementCount === 0 && props.text) {
            if(Array.isArray(props.text)) {
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
            }
            else {
                let paragraph = document.createElement("p");
                paragraph.classList.add(styles['paragraph']);
                textRef.current.appendChild(paragraph);
                let newSpan = document.createElement('span');
                newSpan.textContent = props.text;
                paragraph.appendChild(newSpan);
            }

        }
    }, [props]);

    //append text to parent element and add styles
    function appendText(text, parent, elemType, markDefs) {
        let newSpan = document.createElement(elemType);
        newSpan.textContent = text.text;
        if(text.marks.length > 0) {
            text.marks.forEach(mark => {
                if(markDefs.length > 0) {
                    markDefs.forEach(markDef => {
                        //link
                        if(markDef._key === mark && markDef._type === 'link') {
                            newSpan.remove();
                            newSpan = document.createElement('a');
                            newSpan.textContent = text.text;
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

    let textVariants = {
        hide: {
            opacity: 0,
            x: "-100%",
        },
        show: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 1.6,
                transition: ["ease-in"],
            }
        },
    }

    return (
            props.noAnim ?
                <div className={styles.block} ref={textRef}/>
                :
                <motion.div initial="hide" whileInView="show" exit="hide"
                            viewport={{once: true}} variants={textVariants} ref={textRef}
                            className={styles.block}
                            animate={props.hasFallback ? "show" : ""}>
                </motion.div>
    );
};

export default TextBlock;
