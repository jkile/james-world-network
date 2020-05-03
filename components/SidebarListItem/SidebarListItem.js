import React from 'react';
import Link from "next/link";
import styles from "./SidebarListItem.module.scss"

export default function SidebarListItem(props) {
    return (
        <Link href="/[slug]" as={`/${props.id}`}>
            <li id={props.id} className={`${styles.item}`}>
                <figure className="image is-48x48">
                    <img className={`is-rounded ${styles.avatar}`} src={props.avatar} />
                </figure>
                <h4 className={`has-text-info has-text-weight-bold ${styles.title}`}>{props.text}</h4>
            </li>
        </Link>
    )
}
