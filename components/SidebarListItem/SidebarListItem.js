import React from 'react';
import Link from "next/link";
import styles from "./SidebarListItem.module.scss"

export default function SidebarListItem(props) {
    return (
        <Link href="/[slug]" as={`/${props.id}`}>
            <li id={props.id} className={styles.item}>
                <figure className="image is-48x48">
                    <img className={`is-rounded ${styles.avatar}`} src="https://bulma.io/images/placeholders/48x48.png" />
                </figure>
                <h4 className={`has-text-danger has-text-weight-semibold ${styles.title}`}>{props.text}</h4>
            </li>
        </Link>
    )
}
