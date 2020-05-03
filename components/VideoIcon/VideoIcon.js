import React from 'react';
import { motion } from "framer-motion";
import styles from "./VideoIcon.module.scss";


export default function VideoIcon() {
    return (
        <div className="column">
            <div className={`card has-background-danger ${styles.videoContainer}`}>
                <div className="card-image">
                    <img className={styles.thumbnail} src="https://i.ytimg.com/vi/vldOCeRypGg/maxresdefault.jpg" alt="" />
                </div>
                <div className={`card-content ${styles.contentBackground}`}>

                    <p className={`title has-text-white is-4 ${styles.title}`}>Video Name</p>
                    <p className={`subtitle has-text-white is-6 ${styles.date}`}>01/01/2020</p>
                </div>
            </div>
        </div>
    )
}
