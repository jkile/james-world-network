import React from 'react';
import { motion } from "framer-motion";
import styles from "./VideoIcon.module.scss";


export default function VideoIcon() {
    return (
        <div className="column">
            <div className={`card has-background-dark ${styles.videoContainer}`}>
                <div className="card-image">
                    <img className={styles.thumbnail} src="https://i.ytimg.com/vi/vldOCeRypGg/maxresdefault.jpg" alt="" />
                </div>
                <div className={`card-content ${styles.contentBackground}`}>

                    <p className={`title has-text-danger is-4 has-text-weight-bold ${styles.title}`}>Video Name</p>
                    <p className={`subtitle has-text-danger is-6 has-text-weight-semibold ${styles.date}`}>01/01/2020</p>
                </div>
            </div>
        </div>
    )
}
