import React from 'react';
import Link from "next/link";
import SidebarListItem from "../SidebarListItem/SidebarListItem";
import styles from "./Sidebar.module.scss";

export default function Sidebar(props) {
    console.log(props)
    const drawer = (
        <div>
            <div className={styles.header}>
                <h3 className="is-size-3 has-text-weight-bold has-text-white">SHOWS</h3>
                    <Link href="/">
                        <span className={`icon has-text-white is-medium ${styles.home}`}>
                            <i className="fas fa-home fa-lg"></i>
                        </span>
                    </Link>
            </div>
            <ul>
                {props.channels.map(item => <SidebarListItem text={item.name} slug={item.slug} avatar={item.content.video_url} toggle={props.toggle}/>)}
            </ul>
        </div>
    );

    return (
        <div>
            <aside className={`has-background-dark box ${styles.sidebar} ${props.open ? styles.reveal : {}}`}>
                {drawer}
            </aside>
        </div>
    )
}
