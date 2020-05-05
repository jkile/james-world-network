import React from 'react';
import Link from "next/link";
import styles from "./SidebarListItem.module.scss"

export default function SidebarListItem(props) {
    return (
        <Link href="/[slug]" as={`/${props.slug}`}>
            <li id={props.id} className={`box has-background-dark ${styles.item}`}>
    
                    <img className={`${styles.avatar}`} src={props.avatar} />
     
                <h4 className={`has-text-danger has-text-weight-bold is-size-5 ${styles.title}`}>{props.text}</h4>
            </li>
        </Link>
    )
}
